import AppDispatcher from "../dispatcher";
import Actions from "../constants";

let _resources = [];

import { EventEmitter } from "events";

class ResourceEventEmitter extends EventEmitter {
  getAll() {
    return _resources;
  }
  emitChange () {
    this.emit("CHANGE");
    console.log("4. Change event emitted");
  }
  addChangeListener(callback) {
    this.on("CHANGE", callback);
  }
  removeChangeListener(callback) {
    this.removeListener("CHANGE", callback);
  }
}

let ResourseStore = new ResourceEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case Actions.RECEIVE_RESOURCES:
      //do something
      _resources = action.articles;
      console.log('3 inside callback registered by the store', action.articles);
      ResourseStore.emitChange();
      break;
    default:
      //no operations
  }
});

export default ResourseStore
