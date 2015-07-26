export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="input-field white lighten-5">
            <input id="search" type="search" required />
            <label htmlFor="search"><i className="material-icons">search</i> Search for Articles</label>
          </div>
        </form>
      </div>
    )
  }
}
