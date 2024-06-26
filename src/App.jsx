import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import InputContainer from "./components/InputContainer";
import ItemsContainer from "./components/ItemsContainer";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handeleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handeleDeleteItem = (todoSr) => {
    let counter = 0;
    const newTodoItems = todoItems.filter(() => ++counter !== todoSr);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center className="todoContainer">
        <Heading></Heading>
        <InputContainer onNewItem={handeleNewItem}></InputContainer>
        {todoItems.length === 0 && <WelcomeMessage />}
        {todoItems.length === 0 || (
          <ItemsContainer
            todoItems={todoItems}
            onDeleteClick={handeleDeleteItem}
          ></ItemsContainer>
        )}
      </center>
    </>
  );
}

export default App;
