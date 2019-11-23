import List from "../Models/List.js";
import _store from "../store.js";
import Task from "../Models/Task.js";

//Public
class ListService {
  constructor(){
    _store.loadState();
  }
  //take a new model of List and put that data in there()
  
  createList(newList){
    let list = new List(newList);//make a new list and push it to the model of List, with the data of newList
    let listSet = _store.State.lists;//make a new alias of the store listset that's equal to store.State.lists
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
  let task = new Task(taskData);
  let listBox = _store.State.lists.find(t => t.id == task.taskId);
  listBox.tasks.push(task)
  _store.saveState()
  
  // find(t => t.id == task.listID)
}
          
}

const SERVICE = new ListService();
export default SERVICE;
