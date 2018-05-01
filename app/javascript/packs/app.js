// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {Component} from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import Root from 'src/layout/root'
import {Match} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {IndexRoute, browserHistory, Switch, Redirect} from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home'/>}/>
          </Switch>
          </Root>
      </Router>
    );
  }
}

// render(<App/>, window.document.getElementById("app"));
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})
