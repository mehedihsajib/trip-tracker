/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Button({ children, onClick, initialX, animateX, initialY, animateY }) {
  return (
    <motion.button
      className="bg-deep-green text-lg font-semibold mt-4 px-6 py-4 rounded-lg text-light"
      onClick={onClick}
      initial={{ x: initialX, y: initialY }}
      animate={{ x: animateX, y: animateY }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
