import Home from "./pages/Home/Home"
import About from "./pages/Home/sections/About/About";
import Footer from "./pages/Home/sections/Footer/Footer";
import Projects from "./pages/Home/sections/Projects/Projects";
import Skills from "./pages/Home/sections/Skills/Skills";

const App = () => {

  return (
    <>
      <Home />
      <section>
        <About/>
        <Skills />
        <Projects />
        <Footer />
      </section>
    </>
  )
}

export default App;
