import "./Tarea.css";
import { useState } from "react";
const Tarea = ({
  /*d = {l.Id} texto={l.texto} check={l.check} tiempoCreado={l.tiempoCreado} tiempoTerminado = {l.tiempoTerminado}*/
  Texto = "default tarea",
  Check = false,
  TiempoCreado = Date.now(),
  TiempoTerminado = null,
  tareas,
  setTareas,
}) => {
  const cambioEstadoCheck = () => {
    let indexBuscado = tareas.findIndex((t) => t.TiempoCreado === TiempoCreado);
    console.log("hola", indexBuscado);
    tareas[indexBuscado].TiempoTerminado = ((Date.now() - TiempoCreado) / 1000).toFixed(1);
    tareas[indexBuscado].Check = !tareas[indexBuscado].Check ;
    setTareas(tareas);
  };

  return (
    <>
      <ul className="tarea">
        {
            Check ?  <input type="checkbox" checked className="checkeado" onClick={cambioEstadoCheck}></input> :  <input type="checkbox"  onClick={cambioEstadoCheck}></input>
           
        }
        {
             Check ? <label className="checkeado">{Texto}</label> :  <label>{Texto}</label>
        }
        
      </ul>
    </>
  );
};
export default Tarea;
