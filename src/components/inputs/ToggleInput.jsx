import { useState } from "react";

const ToggleInput = ({ id }) => {
    const [toggle, setToggle] = useState(true);
  
    //function for changing darkMode state
    const handleClick = () => {
        setToggle((prev) => !prev);
    };
  return (
    <>
         <input
          type="checkbox"
          name={`mode-switch-${id}`}
          id={`mode-switch-${id}`}
          className="w-0 h-0"
          defaultChecked={toggle}
        />
        <label
          htmlFor={`mode-switch-${id}`}
          className="relative block shadow-inner rounded-xl w-10 h-6 label"
          onClick={handleClick}
        >
        </label>
    </>
  )
}

export default ToggleInput