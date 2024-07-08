import './TareaInput.css';
const TareaInput = ({ tareas, setTareas }) => {
    const agregarTarea = (e) => {
        e.preventDefault();

            setTareas([
                ...tareas,
                {
                    Texto: e.target.Texto.value,
                    Check: false,
                    TiempoCreado: Date.now(),
                    TiempoTerminado: null
                }
            ])

    }

    return (
        <div>
            <div class="input-group mb-3">
                <form onSubmit={agregarTarea} className='form'>
                    <label for='Texto'></label>
                    <input className='intext' type="text" id='Texto' name='Texto' placeholder="Escribi lo que tenes q hacer aca"></input>
                    <input className='inagregar' type="submit" value={"Agregar"}></input>
                </form>
            </div>
        </div>
    );
}
export default TareaInput;