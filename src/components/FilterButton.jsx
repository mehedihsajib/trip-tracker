/* eslint-disable react/prop-types */
function FilterButton({ children, onClick, unPacked, packed, active }) {
  return (
    <button
      onClick={onClick}
      className={`${
        unPacked ? "bg-red-400" : packed ? "bg-deep-green" : "bg-brown"
      } ${active ? "border-4 border-light" : ""} w-10 h-10 rounded-full`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
