const Label = ({ label, selectedLabel }) => {
  return (
    <h5 onClick={() => selectedLabel(label.name, label.color)} id={label.name} className="label">
      {label.name}
    </h5>
  );
}

export default Label;