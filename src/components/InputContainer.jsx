import { useState } from "react";

function InputContainer({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (
      todoName === undefined ||
      todoName === "" ||
      dueDate === undefined ||
      dueDate === ""
    ) {
      alert("Enter both To-Do Name and dueDate");
      return;
    }
    onNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };
  return (
    <div className="inputContainer w-[80vw] border border-slate-300 flex">
      <input
        className="m-2 px-2 w-[50%] border bg-slate-100 border-slate-600 rounded-sm text-lg "
        type="text"
        value={todoName}
        onChange={handleNameChange}
      />
      <input
        className="m-2 px-2 w-[40%] bg-slate-100 border font-extralight border-slate-600 rounded-sm text-lg"
        type="date"
        value={dueDate}
        onChange={handleDateChange}
      />
      <button
        className="text-slate-50 h-10 w-20 m-2 bg-green-500 rounded-md float-right hover:bg-green-600 border border-gray-700 hover:border-2 hover:border-gray-700"
        onClick={handleAddButtonClicked}
      >
        ADD
      </button>
    </div>
  );
}
export default InputContainer;
