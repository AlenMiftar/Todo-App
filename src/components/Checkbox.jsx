const Checkbox = ({ label, value, onChange }) => {
  return (
    <label
      style={{
        padding: "1rem",
        color: "green",
        cursor: "pointer",
        backgroundcolor: "green",
      }}
    >
      <input
        style={{
          padding: "1rem",
          color: "green",
          cursor: "pointer",
          backgroundcolor: "green",
        }}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <p style={{ backgroundcolor: "green", color: "green" }}>{label}</p>
    </label>
  );
};

export default Checkbox;
