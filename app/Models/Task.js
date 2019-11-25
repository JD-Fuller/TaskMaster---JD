import { generateId } from "../utils.js";

export default class Task {
  constructor({
    id = generateId(), listId, task}) 
    {
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
