/* eslint-disable react/prop-types */
import Item from "./Item";

function ItemList({ items, hanldeDeleteItem, handlePackedItems }) {
  return (
    <ul className="mt-12 flex gap-5 flex-wrap justify-center">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handlePackedItems={handlePackedItems}
          hanldeDeleteItem={hanldeDeleteItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;
