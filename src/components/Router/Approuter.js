import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CharacterList from "../CharacterList";

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="title" to="/">
            Harry Potter API
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
