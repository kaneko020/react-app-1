const Label = ({ label, selectedLabel }) => {
  return (
    <h5 onClick={() => selectedLabel(label.name, label.color)} id={label.name} className="px-4 cursor-pointer">
      {label.name}
    </h5>
  );
}

export default Label;