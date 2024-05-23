import logo from './logo.svg';
import Lista from './components/Lista';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  
  const [tareas,setTareas] = useState([
    {
      Id: 1,
      Texto: "Limpiar mi cuarto",
      Check: false,
      TiempoCreado: Date.now(),
      TiempoTerminado: null
    },
    {
      Id:2,
      Texto: "Lavar la ropa",
      Check: true,
      TiempoCreado: Date.now(),
      TiempoTerminado: null
    }
]);
  
  return (
    <>
    <Lista tareas={tareas} setTareas={setTareas}></Lista>

    </>
  );
}

export default App;
