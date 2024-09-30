import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";

export default function Todo() {

    const [todos, setTodos] = useState([])
    const showList = todos.length > 0
    return (
        <>
            <Form todos={todos} setTodos={setTodos} />
            { showList && <TodoList todos={todos} setTodos={setTodos}/> }
        </>
    )
}