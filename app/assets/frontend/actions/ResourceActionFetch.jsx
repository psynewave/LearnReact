import API from "../API";

export default {

  fetchResources(resourceInfo){
    API.findResources(resourceInfo);
  }

}
