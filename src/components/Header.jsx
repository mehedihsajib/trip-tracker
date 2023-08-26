/* eslint-disable react/prop-types */
import Summery from "./Summery";

function Header({ numOfItems, numOfPackedItems }) {
  return (
    <header className="bg-deep-green py-7 px-5 rounded-t-lg flex justify-between items-center">
      <h1 className="text-light text-4xl font-bold">Trip Tracker</h1>
      <Summery numOfItems={numOfItems} numOfPackedItems={numOfPackedItems} />
    </header>
  );
}

export default Header;
