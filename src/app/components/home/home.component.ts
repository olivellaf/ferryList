import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/lists.service';
import { TodoList } from 'src/app/models/todo-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  allLists: TodoList[] = [];

  constructor(private _ls: ListsService) {
    this.allLists = _ls.ALL_LISTS;
  }

  ngOnInit() { }

}
