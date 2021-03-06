import "./FormElement.css";

function FormElement(props) {
  return (
    <div className="formElement">
      <input
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      ></input>
    </div>
  );
}

export default FormElement;
