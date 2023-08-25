function Form() {
  return (
    <form>
      <select className="bg-brown h-16 py-4 px-4 rounded-l-md focus:outline-none">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        className="bg-light px-4 h-16 py-3 focus:bottom-0 focus:outline-none"
        type="text"
        placeholder="Write your item name..."
      />
      <button
        type="button"
        className="bg-deep-green text-light font-semibold h-16 py-4 bottom-0 px-4 rounded-r-md text-yellow-50"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
