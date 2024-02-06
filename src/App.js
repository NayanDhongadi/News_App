import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import RespNav from "./Component/RespNav";


function App() {


  return (
   <>

<Router>
    <RespNav/>
  {/* <Navbar /> */}
  <Routes>
    <Route exact path='/' element = {<Home/>}/>
    <Route exact path='/about' element = {<About/>}/>
    <Route exact path='/contact' element = {<Contact/>}/>
  </Routes>


</Router>

   </>
  );
}

export default App;
