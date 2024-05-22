import './Lista.css';
import Tarea from '../Tarea/Tarea';

const Lista = ({tareas,setTareas}) =>{

    return(
        <>
        <ul>
            {tareas.map(l => <> <Tarea id = {l.Id} texto={l.texto} check={l.check} tiempoCreado={l.tiempoCreado} tiempoTerminado = {l.tiempoTerminado} tareas ={tareas} setTareas = {setTareas} > </Tarea> </>)}
        </ul>
        
        </>
    );
}



export default Lista;