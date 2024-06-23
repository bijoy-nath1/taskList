// import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ToDocompo(props) {
  const { todoData, settodoData } = useContext(CartContext);
  // const [toggle, setToggle] = useState(false);
  const [Boolean, setBoolean] = useState(true);
  function onclick() {
    setBoolean(!Boolean);
  }
  const [isDisabled, setisDisabled] = useState(false);
  function Toggle(e) {
    setisDisabled(e.target.checked);
  }

  function handleClick() {
    settodoData(todoData.filter((items) => items !== props.item));
  }

  return (
    <div
      id="myInput"
      className=" flex items-center h-20 w-full justify-evenly "
    >
      <input type="checkbox" className=" h-5 w-5 " onChange={Toggle} />
      <span
        contentEditable={!Boolean}
        className={` w-[70%] inline-block pl-0 ${
          !Boolean ? "border border-solid border-black" : "border-none"
        }`}
      >
        {props.item}
      </span>
      {Boolean ? (
        <i
          className={`fa-sharp fa-solid fa-pen-to-square ${
            isDisabled ? "cursor-not-allowed text-grey-500 " : "cursor-pointer"
          }`}
          onClick={!isDisabled ? onclick : undefined}
        />
      ) : (
        <i
          className="fa-solid fa-floppy-disk"
          onClick={onclick}
          id="cursor"
        ></i>
      )}

      <i className="fa-sharp fa-solid fa-xmark" onClick={handleClick}></i>
    </div>
  );
}

export default ToDocompo;

ToDocompo.propTypes = {
  item: PropTypes.string,
  key: PropTypes.string,
};
