/* eslint-disable react/prop-types */
function Form({ text, setText, handleAddItems, quantity, setQuantity }) {
  return (
    <form onSubmit={handleAddItems}>
      <select
        className="bg-brown h-16 py-4 px-4 rounded-l-md focus:outline-none"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        className="bg-light px-4 h-16 py-3 focus:bottom-0 focus:outline-none"
        type="text"
        placeholder="Write your item name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        className="bg-deep-green text-light font-semibold h-16 py-4 bottom-0 px-4 rounded-r-md text-yellow-50"
        onClick={handleAddItems}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
