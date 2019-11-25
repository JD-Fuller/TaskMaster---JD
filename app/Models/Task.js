import { generateId } from "../utils.js";

export default class Task {
  constructor({
    id = generateId(), listId, task
  }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.listId = listId;
    this.task = task;
  }


  get template(){
    return `
                <dl class="mt-1">
                    <dt>${this.task}
                    <button class="btn btn-outline btn-danger" onclick="app.listController.removeTask('${this.id}','${this.listId}')">X</button></dl>
                    `;
  }
}
