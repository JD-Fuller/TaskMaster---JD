import { generateId } from "../utils.js";
import Task from "../Models/Task.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name || "Task List";
    // this.task = data.task || "To-Do Item";
    this.tasks = this.tasks.map(t => new Task(t));
    // this.tasks = data.tasks.map(t => new Task(t));
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you


  get Template(){
    return `
    <div class="col-3 mt-3 p-3 border rounded bg-light " style="margin: 1em;">
            <h1 class="text-left border-bottom">${this.name}<button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${this.id}')">X</button></h1>
            ${this.getTaskTemplate()}
            <form style="margin-bottom: 1em onclick="app.listController.createTask(event,'${this.id}')">
            <div class="input-group mb-3">
                    <input id="task" type="text" class="form-control" placeholder="Add Task" aria-label="task" aria-describedby="task-addon">
                    <div class="input-group-append">
                     <button  class="btn btn-outline-secondary" type="button">+</button>
                    </div>
                </div>
            </form>
    </div>
    `;
  }

  //This is for individual tasks
  getTaskTemplate(){
    let template = "";
    this.tasks.forEach(task => {
      template += task.Template;
    });
    return template;
  }
}
