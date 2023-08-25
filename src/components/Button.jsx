/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="bg-deep-green text-lg font-semibold mt-4 px-6 py-4 rounded-lg text-light">
      {children}
    </button>
  );
}

export default Button;
