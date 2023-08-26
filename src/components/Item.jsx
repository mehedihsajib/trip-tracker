/* eslint-disable react/prop-types */
import { FaCheck, FaTrashAlt } from "react-icons/fa";

function Item({ item, hanldeDeleteItem, handlePackedItems }) {
  return (
    <li
      className="bg-light flex items-center rounded-br-lg rounded-l-lg relative mb-10"
      key={item.id}
    >
      <span className="bg-brown py-3 px-4 rounded-l-lg">{item.quantity}</span>
      <span
        className={`text-dark py-3 px-3 ${item.packed ? "line-through" : ""}`}
      >
        {item.text}
      </span>
      <div className="bg-brown py-2 px-2 flex gap-4 rounded-t-lg absolute top-[-32px] right-0">
        <button
          className="text-deep-green"
          onClick={() => handlePackedItems(item.id)}
        >
          <FaCheck />
        </button>
        <button
          className="text-[#CB2424]"
          onClick={() => hanldeDeleteItem(item.id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
}

export default Item;
