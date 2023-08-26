/* eslint-disable react/prop-types */
import Item from "./Item";

function ItemList({ items, hanldeDeleteItem, handlePackedItems }) {
  return (
    <ul className="mt-12">
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
