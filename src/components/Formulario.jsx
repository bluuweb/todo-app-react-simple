import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ addTodo }) => {
    const initialState = {
        nombre: "todo 1",
        descripcion: "des todo",
        estado: "pendiente",
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        if (!descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción ogligatoria",
                icon: "error",
            });
        }

        // Agregar todo
        addTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: Date.now(),
        });

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form
        reset();
    };

    return (
        <>
            <h3>Formulario</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <textarea
                    type="text"
                    placeholder="ingrese descripción"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <select
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    className="form-control mb-2"
                >
                    <option value="pendiente">pendiente</option>
                    <option value="finalizado">finalizado</option>
                </select>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={prioridad}
                        onChange={handleChange}
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Formulario;
