import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
