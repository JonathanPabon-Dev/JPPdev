import { useState } from "react";
import PropTypes from "prop-types";
import FiltersContext from "../contexts/FiltersContext";

const FiltersProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <FiltersContext.Provider value={{ selectedFilter, handleFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node,
};

export default FiltersProvider;
