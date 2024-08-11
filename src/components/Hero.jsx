import Section from "./Section";
import MouseIcon from "../icons/MouseIcon";

const imagenUrl = new URL("../assets/jpImage.jpg", import.meta.url);

const Hero = () => {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <img
        src={imagenUrl}
        alt="Jonathan Pabon image"
        className="size-48 rounded-full border-4 border-sky-600 object-cover p-1 transition-all duration-300 hover:border-0 hover:p-0 hover:shadow-[0px_0px_10px_2px] hover:shadow-sky-600 dark:border-sky-300 dark:hover:shadow-sky-300"
      />
      <h1 className="mt-10 text-wrap text-center font-poppins text-6xl font-bold text-slate-700 dark:text-slate-200">
        Jonathan Pabón
      </h1>
      <h3 className="mt-2 bg-gradient-to-r from-slate-700 via-sky-600 to-slate-700 bg-clip-text font-poppins text-2xl font-bold text-transparent dark:from-slate-300 dark:via-sky-400 dark:to-slate-300">
        Full Stack Developer
      </h3>
      <p className="my-10 text-center font-poppins text-lg text-slate-700 dark:text-slate-300 md:w-[60%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quam et
        explicabo, incidunt assumenda quos voluptas animi dolorum odio
        accusamus!
      </p>
      <MouseIcon className="absolute bottom-0 mb-24 text-slate-700 dark:text-slate-300" />
    </Section>
  );
};

export default Hero;
