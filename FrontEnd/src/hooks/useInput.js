import { useState } from "react";

function useInput(inputVaildation) {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = inputVaildation(input);


  function inputHandler(event) {
    setInput(event.target.value);
  }

  function inputBlurHandler(){
    setTouched(true);
  }

  return {
    inputHandler,
    inputBlurHandler,
    input,
    valid,
    touched,
  };
}

export default useInput;
