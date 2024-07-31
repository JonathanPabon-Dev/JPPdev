import { useContext } from "react";
import FiltersContext from "../contexts/FiltersContext";
import PropTypes from "prop-types";

const FilterBtn = ({ onClick, children, value }) => {
  const { selectedFilter } = useContext(FiltersContext);

  const isActive = selectedFilter === value;

  return (
    <button
      onClick={onClick}
      className={`min-w-20 rounded-full border-[1px] border-sky-500 px-4 py-2 text-lg font-medium transition-all duration-300 hover:bg-sky-500 hover:text-slate-200 focus:bg-sky-500 focus:text-slate-200 dark:border-sky-300 dark:text-slate-300 dark:hover:bg-sky-300 dark:hover:text-slate-700 dark:focus:bg-sky-300 dark:focus:text-slate-700 ${
        isActive
          ? "bg-sky-500 text-slate-200 shadow-lg dark:bg-sky-300 dark:text-slate-700"
          : "bg-transparent text-slate-700"
      }`}
    >
      {children}
    </button>
  );
};

FilterBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
};

export default FilterBtn;
