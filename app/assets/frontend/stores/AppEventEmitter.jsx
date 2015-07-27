
import { EventEmitter } from "events";

const EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter {
  emitChange () {
    this.emit(EVENT);
    //console.log("4. Change event emitted");
  }
  addChangeListener(callback) {
    this.on(EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(EVENT, callback);
  }
}
