import "./App.css"
import {Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dropdown from "./components/Dropdown"
import { useState } from "react"
function App() {

  const [isOpen,setOpen] = useState(false)
  const toggle = () =>{
      setOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen = {isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
