import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  const aboutRef = useRef(null)

  const aboutScroll = () => aboutRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

  return (
    <div className='App'>
      <Router>
        <Navbar aboutScroll={aboutScroll}/>
        <Switch>
          <Route exact path='/'>
            <Home aboutRef={aboutRef}/>  
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
