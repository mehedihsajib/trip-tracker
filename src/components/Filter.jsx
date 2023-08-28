/* eslint-disable react/prop-types */

import FilterButton from "./FilterButton";

function Filter({
  handleShowPackedItems,
  handleShowAllItems,
  handleShowUnPackedItems,
  filter,
}) {
  return (
    <div className="flex gap-5 absolute top-5 right-5">
      <FilterButton
        onClick={handleShowAllItems}
        all
        active={filter === "all"}
      />

      <FilterButton
        onClick={handleShowPackedItems}
        packed
        active={filter === "packed"}
      />

      <FilterButton
        onClick={handleShowUnPackedItems}
        unPacked
        active={filter === "unpacked"}
      />
    </div>
  );
}

export default Filter;
