import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
