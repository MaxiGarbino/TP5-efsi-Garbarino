
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
      TiempoCreado: Date.now(),
      TiempoTerminado: 10
    },
    /*{
      Texto: "Lavar la ropa",
      Check: true,
      TiempoCreado: Date.now()+100,
      TiempoTerminado: 10
    }*/
]);
  
  return (
    <div className='result'>
    <TareaInput tareas={tareas} setTareas={setTareas}></TareaInput>
    <Lista tareas={tareas} setTareas={setTareas}></Lista>
    <TareaRapida tareas={tareas}></TareaRapida>
    </div>
  );
}

export default App;
