const imagenUrl = new URL('../assets/jpImage.jpg', import.meta.url);

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center">
      <img src={imagenUrl} alt="Jonathan Pabon image" className="rounded-full size-48 object-cover border-4 border-sky-600 p-1 hover:p-0 transition-all duration-300 hover:border-0 hover:shadow-sky-600 hover:shadow-[0px_0px_10px_2px]"/>
      <h1 className="mt-10 text-6xl text-slate-700 font-bold font-poppins">Jonathan Pabón</h1>
      <h3 className="mt-2 text-2xl bg-gradient-to-r from-slate-700 via-sky-600 to-slate-700 bg-clip-text text-transparent font-bold font-poppins">Full Stack Developer</h3>
      <p className="font-poppins mt-10 text-lg w-[80%] text-center text-slate-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit minus consequuntur amet saepe sit itaque numquam explicabo debitis. Cum minus impedit placeat nulla tenetur natus voluptas nihil et recusandae.</p>
    </section>
  );
};

export default Hero;
