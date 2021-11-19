import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("Leer todos local");
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);

    useEffect(() => {
        console.log("Guardar todo local");
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        // console.log(todo);
        setTodos((old) => [...old, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((old) => old.filter((item) => item.id !== id));
    };

    const editarTodo = (id) => {
        const editTodo = todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );
        setTodos(editTodo);
    };

    return (
        <>
            <Formulario addTodo={addTodo} />
            <h2>TodoList</h2>
            <ul className="list-group list-group-numbered">
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        deleteTodo={deleteTodo}
                        editarTodo={editarTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
