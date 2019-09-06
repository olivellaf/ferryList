import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ListsService } from 'src/app/services/lists.service';
import { TodoList } from 'src/app/models/todo-list';
import { ItemList } from 'src/app/models/item-list';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styles: []
})
export class ListDetailComponent implements OnInit {

  list: TodoList;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _ls: ListsService
  ) {
    this.getList();
    console.log(this.list);
  }

  ngOnInit() { }

  getList(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._ls.getList(id).subscribe(list => this.list = list);
  }

  setDone( item: ItemList ): void { item.done = !item.done; }

  goBack(): void { this.location.back(); }

}
