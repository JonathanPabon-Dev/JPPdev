import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/Header";
import About from "./components/About";
import MenuProvider from "./providers/MenuProvider";

const App = () => {
  return (
    <MenuProvider>
      <div className="bg-slate-100 dark:bg-slate-800">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </MenuProvider>
  );
};

export default App;
