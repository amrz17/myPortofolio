import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </main>
  )
}



export default App;
