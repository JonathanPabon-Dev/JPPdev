import PropTypes from "prop-types";

const Section = ({ id, className, altern = false, children }) => {
  return (
    <section
      id={id}
      className={`shadow-sm ${altern && "bg-slate-500 bg-opacity-5"} ${className}`}
    >
      <div
        className={`container mx-auto flex h-full flex-col items-center justify-center py-24`}
      >
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  altern: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
