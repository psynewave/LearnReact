import OneResource from "./OneResource"
import Resource from "../stores/ResourceStore"

export default class ResourceList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };

  }
  componentDidMount () {
    this.setState({
      resources: Resource.fetchAll()
    });
  }
  render() {
    let resources = this.state.resources.map((resource, i) => {
      return <OneResource resource={resource} key={i} />;
    });

    return (
      <ul className="collection">
        {resources}
      </ul>
    )
  }
}
