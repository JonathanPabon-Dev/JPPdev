import { useContext } from "react";
import FilterBtn from "./FilterBtn";
import FiltersContext from "../contexts/FiltersContext";

const Filters = () => {
  const { handleFilter } = useContext(FiltersContext);
  const filters = ["All", "Filter 1", "Filter 2", "Filter 3"];

  return (
    <div className="mb-8 mt-16 flex flex-wrap items-center justify-center gap-4">
      {filters.map((filter, index) => (
        <FilterBtn
          key={index}
          value={filter}
          onClick={() => handleFilter(filter)}
        >
          {filter}
        </FilterBtn>
      ))}
    </div>
  );
};

export default Filters;
