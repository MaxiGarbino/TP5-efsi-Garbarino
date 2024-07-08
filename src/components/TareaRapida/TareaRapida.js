import './TareaRapida.css'


const TareaRapida = ({ tareas }) => {

    const tareaMasRapida = () => {
        let auxNum = 0;
        let auxTar = "";
        tareas.forEach(t => {

            if (t.Check) {
                if (auxNum === 0) {
                    auxNum = t.TiempoTerminado;
                    auxTar = t.Texto;
                }
                if (t.TiempoTerminado < auxNum) {
                    auxNum = t.TiempoTerminado;
                    auxTar = t.Texto;
                }
            }
        });
        document.getElementById("tareaMasRapida").innerHTML =`La tarea mas rapida en resolverse fue: ${auxTar}, con ${auxNum} segundos`
    }

    return (
        <>
            <div>
                <button className='buttonTarRap' onClick={tareaMasRapida}>Tarea mas rapida en terminar</button>
                <div id="tareaMasRapida"></div>
            </div>
        </>
    );

}
export default TareaRapida;