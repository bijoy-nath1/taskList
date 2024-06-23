import { CartContext } from "../context/CartContext";

import { useContext, useEffect, useState } from "react";
import ToDocompo from "./ToDocompo";
function Home() {
  const { settodoData, todoData } = useContext(CartContext);
  const [input, setinput] = useState(" ");

  useEffect(() => {
    const savedTasks = localStorage.getItem("local");
    savedTasks ? settodoData(JSON.parse(savedTasks)) : setinput("");
  }, []);

  function handleClick(e) {
    const updatedTodoData = [...todoData, input];
    e.preventDefault();
    settodoData((prev) => [...prev, input]);
    // e.target.value = "";

    settodoData(updatedTodoData);
    localStorage.setItem("local", JSON.stringify(updatedTodoData));
    setinput("");
    console.log(todoData);
  }

  return (
    <>
      <div className="  w-[35vw] p-4  border border-soldi border-black ">
        <form className=" flex w-auto " onSubmit={handleClick}>
          <input
            type="text"
            className=" h-12 w-[80%] border border-soldi border-black px-3 "
            onChange={(e) => {
              setinput(e.target.value);
            }}
            value={input}
          />
          <button
            type="submit"
            className=" h-12 w-[20%] border border-soldi border-black bg-lime-950 text-white px-3 "
          >
            submit
          </button>
        </form>
        <div className="grid grid-flow-row ">
          {todoData.map((item) => (
            <ToDocompo key={item} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
