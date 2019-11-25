import List from "./Models/List.js";
import Task from "./Models/Task.js";

let _state = {
  
  /** @type {List[]} */
  list: [
      // new List({
      //   name: "Homework",
      //   tasks: []
      // })
  ],
  tasks: []
  //  /** @type {Task[]} */
  //  task: []//added to see if we can add tasks to html
  

  
    // new List({
    //   id: "3",
    //   name: "House",
    //   tasks: []
    // }),
    // new List({
    //   id: "4",
    //   name: "Grocery",
    //   tasks: [
    //     new Task({
    //       task: "Bananas",
    //       listId: "4"
    //     })]
    // }),
    // new List({
    //   id: "5",
    //   name: "Vacation",
    //   tasks:[]
    // }),
    // new List({
    //   id: "6",
    //   name: "School",
    //   tasks: [
    //     new Task({
    //     task: "Paper",
    //     listId: "6"
    // }),
    //     new Task({
    //     task: "Pencils",
    //     listId: "6"
    // })
    // ]
    // }),
    // new List({
    //   id: "7",
    //   name: "Car",
    //   tasks: []
    // })
  
  // tasks: [
  //     new Task({
  //       name: ""
  //     })
  //   ]
    // id: "",
    // name: "",
    // tasks: [""]
};

//NOTE You should not need to change the code from this point down

class Store {
  /**
   * Provides access to application state data
   */
  constructor() {
    this.loadState();
  }
  get State() {
    return _state;
  }

  get Lists() {
    //NOTE use this getter to ensure the objects in list are all of type List
    return _state.list.map(list => new List(list));
  }

  get Tasks() {
    //NOTE use this getter to ensure the tasks objects are all of type task
    return _state.task.map(task => new Task(task));
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("state", JSON.stringify(_state));
  }

  //NOTE this method will get the lists from local storage at the start of the app
  loadState() {
    let saved = JSON.parse(localStorage.getItem("state"));
    if (saved) {
      _state = saved;
    }
  }
}

const store = new Store();
export default store;
