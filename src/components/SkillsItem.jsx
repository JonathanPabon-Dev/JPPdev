import PropTypes from "prop-types";

const SkillsItem = ({ className, children }) => {
  return (
    <li
      className={`group flex size-28 items-center justify-center overflow-hidden rounded-xl border-2 border-sky-500 hover:border-none dark:border-sky-300 ${className}`}
    >
      {children}
    </li>
  );
};

SkillsItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SkillsItem;
