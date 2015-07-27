import AppDispatcher from "../dispatcher";
import Actions from "../constants"

export default {
  receiveResources (payload) {
    //console.log("2 we are in the server here", payload);

    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_RESOURCES,
      articles: payload
    });

  },
  receiveSingleResources(payload){
    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_RESOURCE,
      article: payload
    });
  }
}
