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
    let removeListId = _store.State.lists.findIndex(l => l.id == listId);//ID
    // let listToRemove = removeList.lists.findIndex(l => l.id == listId);
      _store.State.lists.splice(removeListId, 1);
      _store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
          
          //push to the store
createTask(taskData){
  let task = new Task(taskData);// task is now an instance of the Task class
  let list = _store.State.lists.find(t => t.id == task.listId);
  console.log("made it to middle of create task in list service");
  console.log(list);
  _store.State.lists.push(task);
  // _store.State.tasks.push(task);
  _store.saveState();
  
  // find(t => t.id == task.listID)
}

removeTask(listId, taskId){
  let listFromWhichTaskToBeRemoved = store.State.lists.find(t => t.id == listId);
  let taskIndex = listFromWhichTaskToBeRemoved.tasks.findIndex(t => t.id == taskId);
  listFromWhichTaskToBeRemoved.tasks.splice(taskIndex, 1);
  store.saveState();
}
}

const SERVICE = new ListService();
export default SERVICE;
