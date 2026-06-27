import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

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
</div>

);
}

export default App;