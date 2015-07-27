import ResourceActionFetch from "../actions/ResourceActionFetch";

export default class SearchForm extends React.Component {
  handleSubmit (event) {
    event.preventDefault();
    let refs = this.refs;

    ResourceActionFetch.fetchResources(refs.searchField.value);

    refs.articleSearchForm.reset();

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} id="articleSearchForm" ref="articleSearchForm">
          <div className="input-field white lighten-5">
            <input id="searchField" type="search" ref="searchField"/>
            <label htmlFor="search"><i className="material-icons">search</i> Search for Articles</label>
          </div>
        </form>
      </div>
    )
  }
}
