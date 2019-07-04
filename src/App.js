import React, { Component } from "react";
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch ,Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Link to={{pathname:"/rooms",
        search:"?q=test",
        state:{
          test:"test"
        }
        }}>Rooms</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/single-room/:id" exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
