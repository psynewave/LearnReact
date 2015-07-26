export default class Articles extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="collection with-header">
            <li className="collection-header">
              <h5>Search for Articles</h5>
              <form>
                <div className="input-field white lighten-5">
                  <input id="search" type="search" required />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                </div>
              </form>
            </li>
            <li className="collection-item"><div>Article 1<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>Article 2<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>Article 3<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>Article 4<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
          </ul>
      </div>
    )
  }
}
