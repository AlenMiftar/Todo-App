import Item from "./Item";

const List = ({ todo, handleDelete, fetchTodos, onChange }) => {
  if (!todo || todo.length === 0) {
    return <p className="text-white">No ToDo's yet!</p>;
  }
  return (
    <div className="bg-black text-white rounded-xl">
      {todo.map((item) => (
        <Item
          key={item.id}
          todo={item}
          handleDelete={handleDelete}
          todos={todo}
          handleChange={onChange}
          fetchTodos={fetchTodos}
        />
      ))}
    </div>
  );
};

export default List;
