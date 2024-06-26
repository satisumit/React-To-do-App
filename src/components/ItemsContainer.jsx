import ItemContainer from "./ItemContainer";
function ItemsContainer({ todoItems, onDeleteClick }) {
  let todoSr = 0;
  return (
    <div className="itemsContainer m-2 w-[80vw] border border-slate-300 flex flex-col">
      {todoItems.map((item) => (
        <ItemContainer
          todoSr={++todoSr}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></ItemContainer>
      ))}
    </div>
  );
}
export default ItemsContainer;
