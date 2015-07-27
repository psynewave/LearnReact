import ResourceActionsCreator from "../actions/ResourceActionCreator";

export default class Form extends React.Component {
  handleSubmit (event) {
    event.preventDefault();
    let refs = this.refs;
    let resourceInfo = {};

    Object.keys(refs).forEach( key => resourceInfo[key] = refs[key].value );

    console.log(event);

    ResourceActionsCreator.createResource(resourceInfo);

    refs.articleSubmitForm.reset();

  }
  render() {
    return (
      <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)} id="articleSubmitForm" ref="articleSubmitForm">

            <div className="card-panel hoverable">

              <h4>Add Link</h4>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">subtitles</i>
                  <input id="title" type="text" className="validate" ref="title"/>
                  <label htmlFor="title">Resource Title</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">link</i>
                  <input id="link" type="text" className="validate" ref="link"/>
                  <label htmlFor="link">Resource Link</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">person_pin</i>
                  <input id="author" type="text" className="validate" ref="author"/>
                  <label htmlFor="author">Author</label>
                </div>
              </div>

              <div className="row">
                <button type="submit" name="submit" className="btn-floating btn-large waves-light green right">
                  <i className="material-icons">add</i>
                </button>
              </div>
          </div>

          </form>

        </div>
    )
  }
}
