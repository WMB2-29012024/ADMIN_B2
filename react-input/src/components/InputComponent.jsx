const InputComponent = ({ setInputText }) => {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default InputComponent;
