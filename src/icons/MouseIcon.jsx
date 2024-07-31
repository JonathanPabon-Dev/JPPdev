import PropTypes from "prop-types";

const MouseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
      <path d="M12 7l0 4" />
      <path d="M12 15l0 3" />
      <path d="M13 18l-1 1" />
      <path d="M11 18l1 1" />
    </svg>
  );
};

MouseIcon.propTypes = {
  className: PropTypes.string,
};

export default MouseIcon;
