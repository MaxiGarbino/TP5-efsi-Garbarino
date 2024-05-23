
import Lista from './components/Lista/Lista';
import './App.css';
import { useState } from 'react';
import TareaInput from './components/TareaInput/TareaInput';
import TareaRapida from './components/TareaRapida/TareaRapida';

function App() {
  
  const [tareas,setTareas] = useState([
    {
      Texto: "Limpiar mi cuarto",
      Check: false,
      TiempoCreado: new Date(8.64e15),
      TiempoTerminado: null
    },
    {
      Texto: "Lavar la ropa",
      Check: true,
      TiempoCreado: new Date(8.64e15+1),
      TiempoTerminado: null
    }
]);
  
  return (
    <>
    <TareaInput tareas={tareas} setTareas={setTareas}></TareaInput>
    <Lista tareas={tareas} setTareas={setTareas}></Lista>
    <TareaRapida tareas={tareas}></TareaRapida>
    </>
  );
}

export default App;
