const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      <p className="">{label}</p>
    </label>
  );
};

export default Checkbox;
