function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
