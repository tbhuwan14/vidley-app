import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentales from "./components/Rentales";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import MoviesForm from "./components/MoviesForm";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MoviesForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentales" component={Rentales} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
