/* eslint-disable react/prop-types */
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Item({ item, hanldeDeleteItem, handlePackedItems }) {
  return (
    <AnimatePresence>
      <motion.li
        className="bg-light flex items-center rounded-br-lg rounded-l-lg relative mb-10"
        key={item.id}
        initial={{ x: "30px", opacity: 0.5 }}
        animate={{ x: "0px", opacity: 1 }}
        exit={{ x: "30px" }}
      >
        <span className="bg-brown py-2 px-4 rounded-l-lg">{item.quantity}</span>
        <span
          className={`text-dark py-2 px-3 ${item.packed ? "line-through" : ""}`}
        >
          {item.text}
        </span>
        <div className="bg-brown py-2 px-2 flex gap-4 rounded-t-lg absolute top-[-30px] right-0">
          <button
            className="text-deep-green text-sm after:w-10"
            onClick={() => handlePackedItems(item.id)}
          >
            <FaCheck />
          </button>
          <button
            className="text-[#CB2424] text-sm"
            onClick={() => hanldeDeleteItem(item.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </motion.li>
    </AnimatePresence>
  );
}

export default Item;
