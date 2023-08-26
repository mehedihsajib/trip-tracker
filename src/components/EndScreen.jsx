/* eslint-disable react/prop-types */
import Button from "./Button";

function EndScreen({ handlesStartScreen }) {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center">
      <h2 className="text-dark text-4xl font-bold mb-2">Great!</h2>
      <p className="text-gray text-lg">
        You have packed everything needed for your trip.
      </p>
      <Button onClick={handlesStartScreen}>Plan a new trip</Button>
    </div>
  );
}

export default EndScreen;
