import ResourceList from './ResourceList';
import SearchForm from './SearchForm';

export default class ListContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <SearchForm />
        </div>
        <div className="row">
          <ResourceList />
        </div>
      </div>
    )
  }
}
