function Header() {
  return (
    <header className="bg-deep-green py-7 px-5 rounded-t-lg flex justify-between items-center">
      <h1 className="text-light text-4xl font-bold">Trip Tracker</h1>
      <div>
        <span>You have X items packed of X items</span>
      </div>
    </header>
  );
}

export default Header;
