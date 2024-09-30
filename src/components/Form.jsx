import {useState} from "react";
import styles from "./Form.module.css"
export default function Form({setTodos, todos}) {
    const [todo, setTodo] = useState({name: '', done: false})
    function handleSubmit(e) {
        e.preventDefault()
        if (!todo.name.length) return
        setTodos([...todos, todo])
        setTodo({name: '', done: false})
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <input
                className={styles.modernInput }
                type="text" value={todo.name}
                onChange={(e) => setTodo({...todo, name: e.target.value})}
                placeholder="Enter ToDo text..." />
            <button className={styles.modernButton} type="submit">Add</button>
        </form>
    )
}