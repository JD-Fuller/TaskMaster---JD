import { generateId } from "../utils.js";

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.info = data.task || "To-Do Item";
    this.name = data.name;
  }


  get Template(){
    return `
                <dl class="mt-1">
                    <dt>${this.info}</dt>
                    <button class="btn btn-outline btn-danger" onclick="app.listController.removeTask('${this.id}')">X</button></dl>
                    `;
  }
}
