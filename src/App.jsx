import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MenuProvider from "./providers/MenuProvider";
import FiltersProvider from "./providers/FiltersProvider";

const App = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Hero />
      <About />
      <FiltersProvider>
        <Projects />
      </FiltersProvider>
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
