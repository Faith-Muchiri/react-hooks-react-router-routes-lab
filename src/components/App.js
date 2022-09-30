import React from "react";
import { Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
    {/*{code here}*/}
    <NavBar />
    {/* <Routes> */}
    <Switch>
      <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      {/* <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/actors" element={<Actors />} /> */}
    {/* </Routes> */}
    </Switch>
    </div>
  )
}

export default App;
