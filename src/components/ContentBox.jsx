/* eslint-disable react/prop-types */
function ContentBox({ children }) {
  return (
    <div className="bg-light-green h-full flex justify-center p-4">
      <div className="w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default ContentBox;
