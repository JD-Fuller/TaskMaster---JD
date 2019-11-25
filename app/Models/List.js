import Task from "../Models/Task.js";
import { generateId } from "../utils.js";
import store from "../store.js";

export default class List {
  constructor({id = generateId(), name, tasks}) {
    this.id = id || generateId();
    this.name = name || "Task List";
    // this.tasks = [];
    this.tasks = [''];
    // this.tasks = tasks.map(t => new Task(t));
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you


  get template(){
    return `
    <div class="col-3 mt-3 p-3 border rounded bg-light tasks" style="margin: 1em;">
            <h1 class="text-left border-bottom" id="name">${this.name}<button class="btn btn-outline btn-danger" onclick="app.listController.removeList('${this.id}')">X</button></h1>
            <div id="task"><h2>${this.tasks}</h2></div>
           
            <form style="margin-bottom: 1em;" onsubmit="app.listController.createTask(event,'${this.id}')">
            <div class="input-group mb-3">
                    <input id="task" type="text" class="form-control" placeholder="Add Task" aria-label="task" aria-describedby="task-addon">
                    <div class="input-group-append">
                     <button  class="btn btn-outline-secondary" type="submit">+</button>
                    </div>
                </div>
            </form>
    </div>
    `;
  }


  
  // This is for individual tasks
  drawTask(){
    debugger;
    let template = "";
    this.tasks.forEach(task => {template += task.template});
    return template
  }


  // <h2>${globalThis.task}</h2>
  // <p>${this.tasks}</p>
  // <p>${this.drawTask()}</p>

}