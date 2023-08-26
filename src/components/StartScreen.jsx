/* eslint-disable react/prop-types */
import Button from "./Button";

function StartScreen({ handleScreen }) {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center">
      <h2 className="text-dark text-4xl font-bold mb-2">Welcome!</h2>
      <p className="text-gray text-lg">
        Great to see you that you planning to your next trip!
      </p>
      <Button onClick={handleScreen}>Start adding list</Button>
    </div>
  );
}

export default StartScreen;
