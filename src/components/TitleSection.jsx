import PropTypes from "prop-types";

const TitleSection = ({ children }) => {
  return (
    <h2 className="font-montserrat text-5xl font-extrabold text-slate-800 dark:text-slate-200">
      {children}
    </h2>
  );
};

TitleSection.propTypes = {
  children: PropTypes.node,
};

export default TitleSection;
