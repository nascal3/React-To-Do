import styles from "./todoItem.module.css"
export default function TodoItem({ item, index, todos, setTodos }) {
    function deleteTodoItem(deleteIndex) {
        todos.splice(deleteIndex, 1)
        setTodos([...todos])
    }

    function markDone(selectedItem) {
        const newTodos = todos.map((todo) => todo.name === selectedItem ? {...todo, done: !todo.done} : todo)
        const sortedList = [...newTodos].sort((a, b) => Number(a.done) - Number(b.done))
        setTodos(sortedList)
    }

    return (
        <li>
            <span
                className={ item.done ? styles.done : styles.text}
                onClick={()=>markDone(item.name)}>
                {item.name}
            </span>
            <span>
                <button
                    className={styles.deleteButton}
                    onClick={()=>deleteTodoItem(index)}>
                    x
                </button>
            </span>
        </li>
    )
}