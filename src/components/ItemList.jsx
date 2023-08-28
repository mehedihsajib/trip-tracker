/* eslint-disable react/prop-types */
import Item from "./Item";
import emptyIcon from "../assets/empty-icon.png";

function ItemList({ hanldeDeleteItem, handlePackedItems, filteredItems }) {
  return (
    <>
      {filteredItems.length < 1 ? (
        <div className="bg-red opacity-5">
          <img src={emptyIcon} alt="" />
        </div>
      ) : (
        <ul className="mt-12 flex gap-5 flex-wrap justify-center">
          {filteredItems?.map((item) => (
            <Item
              key={item.id}
              item={item}
              handlePackedItems={handlePackedItems}
              hanldeDeleteItem={hanldeDeleteItem}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default ItemList;
