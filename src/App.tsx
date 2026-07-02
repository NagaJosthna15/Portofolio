import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications  from "./components/Certifications";
import Contact from "./components/Contact";


function App(){

return(

<div className="App">
  <ParticleBackground/>

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Experience/>
<Projects/>
<Education/>
<Certifications/>
<Contact/>
</div>

);
}

export default App;