import './Tarea.css';
const Tarea = (
    {
        /*d = {l.Id} texto={l.texto} check={l.check} tiempoCreado={l.tiempoCreado} tiempoTerminado = {l.tiempoTerminado}*/
        Id = Date.now(),
        texto = "default tarea",
        check = false,
        tiempoCreado = Date.now(),
        tiempoTerminado = null,
        tareas,setTareas
    }
) => {
    const eliminarTarea = (e) => {
        e.preventDefault();
        if(window.confirm("¿Esta seguro de eliminar una cita?")){
            setTareas(
                tareas.filter(e =>
                  e.Id !== Id
                ));
        }
    return (
        <>
        <ul></ul>
        </>
    );
}
}
export default Tarea;