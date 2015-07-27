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
      //old es5 way
      /*
      var resultSet = $.grep(resources, function (e) {
          return e.title.indexOf(searchTerm) == 0;
      });
      */

      //new es6 way

      let resultSet = resources.filter((article) => {
        //using indexOf to return all results if there is any empty search term
        return article.title.indexOf(searchTerm) == 0;
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
