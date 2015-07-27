import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _resources = [];

class ResourceEventEmitter extends AppEventEmitter {
  getAll() {
    return _resources;
  }
}

let ResourseStore = new ResourceEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case Actions.RECEIVE_RESOURCES:
      //do something
      _resources = action.articles;
      //console.log('3 inside callback registered by the store', action.articles);
      ResourseStore.emitChange();
      break;
    case Actions.RECEIVE_RESOURCE:
      _resources.push(action.article);
      ResourseStore.emitChange();
      break;
    default:
      //no operations
  }
});

export default ResourseStore
