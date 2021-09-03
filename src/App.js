import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Navbar from "./Layouts/Navbar";
import UserDetail from "./Containers/UserDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div class="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/user/:username" component={UserDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
