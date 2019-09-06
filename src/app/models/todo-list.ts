import { ItemList } from './item-list';

export interface TodoList {
  _uid: number;
  name: string;
  items: ItemList[];
}
