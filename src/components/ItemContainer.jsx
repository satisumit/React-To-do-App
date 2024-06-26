function ItemContainer({ todoSr, todoDate, todoName, onDeleteClick }) {
  return (
    <div className="itemContainer w-full flex items-center justify-center">
      <p className="w-[5%] font-semibold p-2"> {todoSr}.</p>
      <p className="text-left p-2 w-[50%] text-wrap h-auto ">{todoName}</p>
      <p className="py-4 w-[40%] flex-grow ">{todoDate}</p>
      <button
        className="text-slate-50 h-10 w-20 m-2 bg-red-500 rounded-md float-right hover:bg-red-400 border border-gray-700 hover:border-2 hover:border-gray-700"
        onClick={() => onDeleteClick(todoSr)}
      >
        Delete
      </button>
    </div>
  );
}
export default ItemContainer;
