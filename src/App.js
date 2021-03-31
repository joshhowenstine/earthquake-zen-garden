import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <main>
      <Header />
      <div className="main-content">
        <div className="container">
          <Switch>
              <Route exact path="/detail/:id">
                <Detail />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
      </div>
    </main>
  </Router>
)

export default App