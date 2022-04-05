import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import './App.css'
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";

function App() {
  
  return <main>
 <Nav></Nav> 
  <Home></Home>
  <Resume></Resume>
  <AboutMe></AboutMe>
  <Footer/>
  </main>
}

export default App;
