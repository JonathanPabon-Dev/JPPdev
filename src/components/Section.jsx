import PropTypes from "prop-types";

const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`container mx-auto flex flex-col items-center justify-center py-24 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
