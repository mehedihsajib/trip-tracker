/* eslint-disable react/prop-types */
function Container({ children }) {
  return (
    <div className="bg-light-green max-w-5xl min-h-[90vh] rounded-lg mx-auto my-5">
      {children}
    </div>
  );
}

export default Container;
