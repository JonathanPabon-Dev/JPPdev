import PropTypes from "prop-types";

const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center py-24 ${className}`}
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
