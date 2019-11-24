import ListService from "../Services/ListService.js";
import store from "../store.js"
import SERVICE from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = ''//make empty list template
  let list = store.Lists//let list equal the stored list
  list.forEach(list => {listTemplate += list.Template});//for each list from the store that we have, add the new listTemplate

  document.querySelector("#tasks").innerHTML = listTemplate //push this out to HTML where the ID=tasks is found
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(event, listId){
    event.preventDefault()
    let formData = event.target
    let newList = {
      listId,
      name: formData.taskTitle.value,
      task: formData.task.value
    };
    SERVICE.createList(newList)
    _drawLists();
  }
  removeList(id){
    event.preventDefault();
    console.log("remove list")
    SERVICE.removeList(id);
    _drawLists();
  }

createTask(event, listId){
  console.log("add a task")
  event.preventDefault()
  let formData = event.target
debugger;
  let newTask = {
    listId: listId,
    task: formData.task.value
};
  SERVICE.createTask(newTask)
  // formData.reset()
  _drawLists()
  console.log(event.target.task.value)
}

removeTask(listId, taskId){
  ListService.removeTask(listId, taskId)
  _drawLists();
}
}
