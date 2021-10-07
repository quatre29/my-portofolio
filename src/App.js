import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  const aboutRef = useRef(null)
  const passionRef = useRef(null)
  const xpRef = useRef(null)

  const aboutScroll = () => aboutRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  const passionScroll = () => passionRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  const xpScroll = () => xpRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})



  return (
    <div className='App'>
      <Router>
        <Navbar aboutScroll={aboutScroll} passionScroll={passionScroll} xpScroll={xpScroll}/>
        <Switch>
          <Route exact path='/'>
            <Home aboutRef={aboutRef} passionRef={passionRef} xpRef={xpRef}/>  
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
