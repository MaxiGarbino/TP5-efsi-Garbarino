import './Lista.css';
import Tarea from '../Tarea/Tarea';

const Lista = ({tareas,setTareas}) =>{

    return(
        <form>
            {tareas.map(l => <Tarea Texto={l.Texto} Check={l.Check} TiempoCreado={l.TiempoCreado} TiempoTerminado = {l.TiempoTerminado} tareas ={tareas} setTareas = {setTareas} ></Tarea>)}
        </form>
    );
}



export default Lista;