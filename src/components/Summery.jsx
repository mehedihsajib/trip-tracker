/* eslint-disable react/prop-types */

function Summer({ numOfPackedItems, numOfItems }) {
  return (
    <div>
      {numOfItems > 0 && numOfItems !== numOfPackedItems ? (
        <span className="text-dark">
          You have packed <strong>{numOfPackedItems}</strong> of{" "}
          <strong>{numOfItems}</strong> items
        </span>
      ) : numOfItems > 0 && numOfItems === numOfPackedItems ? (
        <span className="text-dark">You have packed everything!</span>
      ) : null}
    </div>
  );
}

export default Summer;
