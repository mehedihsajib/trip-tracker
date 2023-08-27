/* eslint-disable react/prop-types */
import Button from "./Button";
import { motion } from "framer-motion";

function StartScreen({ handleScreen }) {
  return (
    <motion.div
      className="min-h-[60vh] flex flex-col justify-center items-center"
      initial={{ x: "200px", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
    >
      <h2 className="text-dark text-4xl font-bold mb-2">Welcome!</h2>
      <p className="text-gray text-lg">
        Great to see you that you planning to your next trip!
      </p>
      <Button onClick={handleScreen} initialX="30px" animateX={0}>
        Start adding list
      </Button>
    </motion.div>
  );
}

export default StartScreen;
