import { FaRegCircle, FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoItem = ({ todo, toggle, deleteTodo}) => {
  return (
    <div
      className="w-full flex items-center px-2 py-4 gap-2 border-b cursor-pointer select-none"
      onClick={() => toggle(todo.id)}
    >
      {
todo.isComplete ? (<FaRegCheckCircle className="text-[#00ADB5] text-2xl" />) : (<FaRegCircle className="text-[#00ADB5] text-2xl" />)
      }
      
      <p className={`flex-1 ${todo.isComplete ? "line-through" : ""}`}>{todo.text}</p>
      <FaRegTrashAlt className="text-[#e01056] text-2xl hover:scale-110 transition-all" onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
  }).isRequired,
};

export default TodoItem;
