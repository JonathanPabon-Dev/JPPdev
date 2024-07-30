import PropTypes from "prop-types";

const TitleSection = ({ children }) => {
  return (
    <h2 className="relative z-10 flex items-center justify-center font-montserrat text-4xl font-extrabold text-slate-800 dark:text-slate-200 sm:text-5xl">
      {children}
      <span
        className="absolute select-none text-nowrap font-poppins text-5xl font-black text-transparent opacity-10 sm:text-8xl md:text-8xl"
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#0ea5e9",
        }}
      >
        Hola mundo
      </span>
    </h2>
  );
};

TitleSection.propTypes = {
  children: PropTypes.node,
};

export default TitleSection;
