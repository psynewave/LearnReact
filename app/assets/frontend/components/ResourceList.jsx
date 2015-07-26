import OneResource from "./OneResource"
import ResourceStore from "../stores/ResourceStore"

let getStateFromStore = () => {
  return { resources: ResourceStore.getAll() };
}

export default class ResourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    console.log("5. The store has changed update the state");
    this.setState(getStateFromStore());
  }
  componentDidMount() {
    ResourceStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    ResourceStore.removeChangeListener(this.onStoreChange);
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
