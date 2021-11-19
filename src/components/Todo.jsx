const Todo = ({ todo, deleteTodo, editarTodo }) => {
    const { id, nombre, descripcion, estado, prioridad } = todo;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => deleteTodo(id)}
                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-sm btn-warning me-1"
                        onClick={() => editarTodo(id)}
                    >
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "prioritario"}
            </span>
        </li>
    );
};

export default Todo;
