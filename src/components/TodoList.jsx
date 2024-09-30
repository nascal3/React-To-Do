import TodoItem from "./TodoItem.jsx";
import styles from "./todoList.module.css"

export default function TodoList({ todos, setTodos }) {

    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    item={todo}
                    index={index}
                    todos={todos}
                    setTodos={setTodos}/>
            ))}
        </ul>
    )
}