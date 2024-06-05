import { useState } from "react";
import "./Tarea.css";
const Tarea = ({
  /*d = {l.Id} texto={l.texto} check={l.check} tiempoCreado={l.tiempoCreado} tiempoTerminado = {l.tiempoTerminado}*/
  Texto = "default tarea",
  Check = false,
  TiempoCreado = Date.now(),
  TiempoTerminado = null,
  tareas,
  setTareas,
}) => {
  const [chequeado, setChequeado] = useState(Check);
  const cambioEstadoCheck = () => {
    let indexBuscado = tareas.findIndex((t) => t.TiempoCreado === TiempoCreado);
    console.log("hola", indexBuscado);
    tareas[indexBuscado].TiempoTerminado = ((Date.now() - TiempoCreado) / 1000).toFixed(1);
    tareas[indexBuscado].Check = !tareas[indexBuscado].Check;
    console.log(tareas[indexBuscado].Check)
    console.log(tareas)
    setTareas(tareas);
    setChequeado(!chequeado);
    console.log(tareas)
  };
  const eliminarTarea = (e) => {
    e.preventDefault();
    if(window.confirm("¿Esta seguro de eliminar una tarea?")){
        setTareas(
            tareas.filter(e =>
              e.TiempoCreado !== TiempoCreado
            ));
    }
    
  }

  return (
    <>
      <ul className="tarea">
        
        {
            chequeado ?  <div className="centrar"><input type="checkbox" checked className="checkeado" onClick={cambioEstadoCheck}></input><p className="checkeado">{Texto}</p><button onClick={eliminarTarea} class="button elimnar u-full-width">Eliminar ×</button></div>  :  <div className="centrar"><input type="checkbox"  onClick={cambioEstadoCheck}></input><p>{Texto}</p><button onClick={eliminarTarea} class="button elimnar u-full-width">Eliminar ×</button></div>
           
        }
        
      </ul>
    </>
  );
};
export default Tarea;
