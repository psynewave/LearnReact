import API from "../actions/API"

let _resources = [];

export default {
  getAll() {
    return _resources;
  },
  fetchAll() {
    API.getAllResources()
    .success(data => {
      //this.setState({ resources: data });
      console.log(data);
      _resources = data;
    })
    .error(error => {
      console.error(error);
    });
  }
}
