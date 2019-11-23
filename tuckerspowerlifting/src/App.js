import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Training from "./pages/training/Training";
import Philosophy from "./pages/philosophy/Philosophy";
import Education from "./pages/education/Education";
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/landing/Landing";


function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Training" component={Training} />
        <Route exact path="/Philosophy" component={Philosophy} />
        <Route exact path="/Education" component={Education} />
        <Route path='/gram' component={() => window.location = 'https://www.instagram.com/tuckslifting/?hl=en'}/>

          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;