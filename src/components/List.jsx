import Item from "./Item";

const List = ({ todo }) => {
  return (
    <div className="bg-black text-white rounded-xl">
      {todo.map((item) => (
        <Item key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default List;
