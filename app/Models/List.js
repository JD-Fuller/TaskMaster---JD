import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name || "Task List";
    this.task = data.task || "To-Do Item";
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you


  //This use to be get Template(){}
  get Template(){
    return `
    <div class="col-3 mt-3 p-3 border rounded bg-light " style="margin: 1em;">
            <h1 class="text-left border-bottom">${this.name}</h1>
                <dl class="mt-1">
                    <dt>${this.task}</dt>
                    </dl>
    </div>
    `;
  }

  //This is for individual tasks
  getTaskTemplate(){
    let template = '';
    this.task.forEach(task => {
      template += task.Template;
    });
    return template;
  }
}
