import "./App.css";

import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/nav";
import NotFound from "./components/notFound";

import About from './components/about'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="d-flex justify-content-center">
      <Switch>

        <Route path="/login"  component={Login} />
        <Route path="/about"  component={About} />
        <Route path="/register"  component={Register} />
        <Route path="*" component={NotFound} />

      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
