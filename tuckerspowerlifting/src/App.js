import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homePage/HomePage";
import Training from "./pages/training/Training";
import Philosophy from "./pages/philosophy/Philosophy";
import Education from "./pages/education/Education";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Training" component={Training} />
          <Route exact path="/Philosophy" component={Philosophy} />
          <Route exact path="/Education" component={Education} />

          {/* external links */}
          <Route path='/gram' component={() => window.location = 'https://www.instagram.com/tuckslifting/?hl=en'}/>
          <Route path='/531' component={() => window.location = 'https://www.t-nation.com/workouts/531-how-to-build-pure-strength'}/>
          <Route path='/startingStrenth' component={() => window.location = 'https://www.ruled.me/starting-strength-beginner-routine/'}/>
          <Route path='/PH3' component={() => window.location = 'https://liftvault.com/programs/powerlifting/layne-norton-ph3-spreadsheet/'}/>
          <Route path='/kabuki' component={() => window.location = 'https://www.youtube.com/watch?v=qzGOcEuct54'}/>
          <Route path='/3dmj' component={() => window.location = 'https://www.youtube.com/watch?v=sLfdf_W2F4o'}/>
          <Route path='/ankle' component={() => window.location = 'https://www.youtube.com/watch?v=ApaYeUkyots'}/>
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;