import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {

  //take a new model of List and put that data in there()

createList(newList){
let list = new List(newList);//make a new list and push it to the model of List, with the data of newList
let listSet = store.State.lists;//make a new alias of the store listset that's equal to store.State.lists
listSet.push(list);//push the new created list to the store

store.saveState();
}
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
          
          //push to the store

          
}

const SERVICE = new ListService();
export default SERVICE;
