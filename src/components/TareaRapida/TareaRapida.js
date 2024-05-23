import './TareaRapida.css'
const TareaRapida = ({ tareas }) => {

    const tareaMasRapida = () => {
        let auxNum = 0;
        let auxTar = null;
        console.log(auxTar);
        tareas.forEach(t => {

            if (t.Check) {
                if (auxNum === 0) {
                    auxNum = t.TiempoTerminado;
                    auxTar = t.Nombre;
                }
                if (t.TiempoTerminado < auxNum) {
                    auxNum = t.TiempoTerminado;
                    auxTar = t.Nombre;

                }
            }
            console.log(t.TiempoTerminado, t.Nombre);
        });
    }

    return (
        <>
            <div class="input-group mb-3">
                <button class="input-group-text" onclick={tareaMasRapida()}>Tarea mas rapida en hacer</button>
                <div id="tareaMasRapida"></div>
            </div>
        </>
    );

}
export default TareaRapida;