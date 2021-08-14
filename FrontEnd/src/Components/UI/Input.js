function Input(props) {
  const valid = props.valid ? "valid" : "invalid";
  const classes = props.touched ? `form-control is-${valid}` : "form-control";
  return (
    <div className="container w-75">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>

        <input
          id={props.id}
          value={props.value}
          type={props.type}
          className={classes}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />

        <div className={`${valid}-feedback`}>
          {valid === "invalid"
            ? `Please type a vaild ${props.label}`
            : "Looks Good"}
        </div>
    </div>
  );
}

export default Input;
