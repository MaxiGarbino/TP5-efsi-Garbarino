import './Tarea.css';
const Tarea = (
    {
        /*d = {l.Id} texto={l.texto} check={l.check} tiempoCreado={l.tiempoCreado} tiempoTerminado = {l.tiempoTerminado}*/
        Texto = "default tarea",
        Check = false,
        TiempoCreado = Date.now(),
        TiempoTerminado = null,
        tareas, setTareas
    }
) => {
        const cambioEstadoCheck = () =>{
        const buscarIndex = (fecha) =>{
            return fecha === TiempoCreado;
        }
        tareas.findIndex(buscarIndex())
        setTareas([
            {
                Texto: Texto,
                Check: (!Check),
                TiempoCreado: TiempoCreado,
                TiempoTerminado: ((Date.now() - TiempoCreado)/1000).toFixed(1)
            }
        ])
    }
    
    
        return (
            <>
                <ul className='tarea'>
                    <input type="checkbox"onClick={cambioEstadoCheck()}/>
                    <label>{Texto}</label>
                </ul>
            </>
        );
    
}
export default Tarea;