/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Summer({ numOfPackedItems, numOfItems }) {
  return (
    <div>
      {numOfItems > 0 && numOfItems !== numOfPackedItems ? (
        <span className="text-brown text-2xl">
          You have packed <strong>{numOfPackedItems}</strong> of{" "}
          <strong>{numOfItems}</strong> {numOfItems > 1 ? "items" : "Item"}!
        </span>
      ) : numOfItems > 0 && numOfItems === numOfPackedItems ? (
        <motion.span
          className="text-brown text-2xl inline-block"
          initial={{ y: "10px", opacity: 0.5 }}
          animate={{ y: "0px", opacity: 1 }}
        >
          You have packed everything!
        </motion.span>
      ) : null}
    </div>
  );
}

export default Summer;
