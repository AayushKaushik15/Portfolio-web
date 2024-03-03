import About from "./components/About";
import Content from "./components/Content";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Content/>
    </div>
  );
}

export default App;
