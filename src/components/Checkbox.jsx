const Checkbox = ({ label, value, onChange, onClick }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        onClick={onClick}
        style={{ color: "green", cursor: "pointer" }}
      />
      <p className="">{label}</p>
    </label>
  );
};

export default Checkbox;
