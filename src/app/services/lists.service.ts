import { Injectable } from '@angular/core';
import { TodoList } from '../models/todo-list';
import { ItemList } from '../models/item-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  public ALL_LISTS: TodoList[] = [];

  constructor() {
    if(this.ALL_LISTS == null ||
        this.ALL_LISTS == undefined ||
          this.ALL_LISTS.length == 0) {
      this.automatedCreationToDoList();
    }
  }

  automatedCreationToDoList() {
    for (let i = 0; i < this.getRandomNumberBetwen(3, 6); i++) {
        let newTodoList: TodoList = {
          _uid: i,
          name: 'ToDoList ' + i,
          items: []
        };

        for (let i = 0; i < this.getRandomNumberBetwen(5, 10); i++) {
            let newItemList: ItemList = {
              name: 'ItemList ' + i,
              done: this.getRandomBoolean(),
            }
            newTodoList.items.push(newItemList);
        }
      this.ALL_LISTS.push(newTodoList);
    }
  }

  getList(id: number): Observable<TodoList> {
    return of (this.ALL_LISTS.find(list => list._uid === id));
  }

  getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  getRandomNumberBetwen( min: number, max: number): number {
    let randomNum = Math.floor(Math.random() * max) + min;
    console.log("min/max | rnd", min, max, randomNum);
    return randomNum;
  }
}
