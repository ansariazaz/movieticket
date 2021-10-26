import Home from "../src/Components/Home";
import Contact from "../src/Components/Contact";
import About from "../src/Components/About";
import Navbar from "../src/Components/Navbar";
import Movie from "../src/Components/Movie";
import Moviedetail from "../src/Components/Moviedetail";
import Bookform from "../src/Components/Bookform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/movie" component={Movie} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/moviedetail/" component={Moviedetail}></Route> 
          <Route path="/movie/:id" component={Moviedetail}></Route>
          <Route path="/bookform/:id" component={Bookform}></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
