//import Flux from 'flux'

import Form from './components/Form';
import Articles from './components/Articles';

class App extends React.Component {
  render() {
    return (
      <div>
        <h4>Learn React &amp; Flux</h4>
        <Form />
        <Articles />
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
