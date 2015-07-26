//import Flux from 'flux'

import Form from './components/Form';
import ListContainer from './components/ListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Learn React &amp; Flux</h4>
        <Form />
        <ListContainer />
      </div>

    )
  }
}
$(document).ready(function(){
  React.render(
    <App />,
    $('#react')[0]
  )
});
