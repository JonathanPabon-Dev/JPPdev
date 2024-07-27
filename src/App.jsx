import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen dark:bg-slate-600">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
