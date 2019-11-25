import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Task.js";
import store from "../store.js";

//Public
class ListService {
  constructor(){
    _store.loadState();
  }
  //take a new model of List and put that data in there()
  
  createList(newList){
    let list = new List(newList);//make a new list and push it to the model of List, with the data of newList
    let listSet = _store.State.list;//make a new alias of the store listset that's equal to store.State.lists
    listSet.push(list);//push the new created list to the store
    _store.saveState();
  }
  removeList(listId) {
    let removeListId = _store.State.list.findIndex(l => l.id == listId);//ID
    // let listToRemove = removeList.lists.findIndex(l => l.id == listId);
      _store.State.list.splice(removeListId, 1);
      _store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
          
          //push to the store
// createTask(taskData){
//   let task = new Task(taskData);// task is now an instance of the Task class
//   debugger;
//   let list = _store.State.task.find(t => t.id == task.listId);
//   console.log("made it to middle of create task in list service");
//   console.log(list);
//   debugger;
//   _store.State.tasks.push(task);
//   _store.saveState();
  
//   // find(t => t.id == task.listID)
// }

createTask(taskData){
  let task = taskData;// task is now an instance of the Task class
  debugger;
  let listIndex = _store.State.list.find(list => list.id == task.listId);
  // let taskID = _store.State.task.find(id => id.id == task.listId) Not Tested - reciprocal of let lest
  console.log("made it to middle of create task in list service");
  console.log(listIndex);
  if (listIndex.id == task.listId){
  _store.State.tasks.push(task)}
  else {return undefined;}
  _store.saveState();
  
  // find(t => t.id == task.listID)
}




removeTask(listId, taskId){
let z = confirm("Are you Sure you want to delete this task?")
  let listFromWhichTaskToBeRemoved = store.State.tasks.find(t => t.id == listId);
  // let listFromWhichTaskToBeRemoved = store.State.task.find(t => t.id == listId);
  // let taskIndex = listFromWhichTaskToBeRemoved.task.findIndex(t => t.id == taskId);
  // listFromWhichTaskToBeRemoved.task.splice(taskIndex, 1);
_store.State.tasks.splice(listFromWhichTaskToBeRemoved, 1);

  store.saveState();
}
}

const SERVICE = new ListService();
export default SERVICE;
