import { FaCheck, FaTrashAlt } from "react-icons/fa";

function ItemList() {
  return (
    <ul className="mt-12">
      <li className="flex items-center relative mb-10">
        <span className="bg-brown py-3 px-4 rounded-l-lg">4</span>
        <span className="bg-light text-dark py-3 px-3 rounded-br-lg">
          Camera with waterproof cover
        </span>
        <div className="bg-brown py-2 px-2 flex gap-4 rounded-t-lg absolute top-[-32px] right-0">
          <button className="text-deep-green">
            <FaCheck />
          </button>
          <button className="text-[#CB2424]">
            <FaTrashAlt />
          </button>
        </div>
      </li>
      <li className="flex items-center relative">
        <span className="bg-brown py-3 px-4 rounded-l-lg">4</span>
        <span className="bg-light text-dark py-3 px-3 rounded-br-lg">
          Camera with waterproof cover
        </span>
        <div className="bg-brown py-2 px-2 flex gap-4 rounded-t-lg absolute top-[-32px] right-0">
          <button className="text-deep-green">
            <FaCheck />
          </button>
          <button className="text-[#CB2424]">
            <FaTrashAlt />
          </button>
        </div>
      </li>
    </ul>
  );
}

export default ItemList;
