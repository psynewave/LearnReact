import ServerActionsCreator from "./actions/ServerActionsCreators"

export default {
  getAllResources() {
    $.get("articles")
    .success( resources => {
      //create server action
      //console.log('1. need action now');

      ServerActionsCreator.receiveResources(resources);

    })
    .error(error => {

    });
  },
  findResources(searchTerm) {
    $.get("articles")
    .success( resources => {
      //create server action
      var resultSet = $.grep(resources, function (e) {
          return e.title.indexOf(searchTerm) == 0;
      });

      ServerActionsCreator.receiveResources(resultSet);

    })
    .error(error => {

    });
  },

  createResource(data) {
    $.post("/articles", {article: data})
    .success( response => {
      //create server action
      ServerActionsCreator.receiveSingleResources(response);
    })
    .error(error => {
      console.error('Houston we have a problem ', error);
    });
  }
}
