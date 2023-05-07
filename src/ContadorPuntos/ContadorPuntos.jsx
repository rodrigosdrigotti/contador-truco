import React, { useState } from 'react';
import './ContadorPuntos.css';

export const ContadorPuntos = () => {

    const [puntosEllos, setPuntosEllos] = useState(0);
    const [puntosNosotros, setPuntosNosotros] = useState(0);
    var rootDiv = document.getElementById('puntos-ellos');

    const handlePuntosEllos = (operacion) => {
        if (puntosEllos !== 15 && puntosNosotros !== 15) {
            if (operacion === "+") {
                setPuntosEllos(puntosEllos + 1)
            }
            else if (operacion === "-" && puntosEllos !== 0) {
                setPuntosEllos(puntosEllos - 1)
            }
        } else {
            return null;
        }
    }

    const handlePuntosNosotros = (operacion) => {
        if (puntosEllos !== 15 && puntosNosotros !== 15) {
            if (operacion === "+") {
                setPuntosNosotros(puntosNosotros + 1)
            }
            else if (operacion === "-" && puntosNosotros !== 0) {
                setPuntosNosotros(puntosNosotros - 1)
            }
        } else {
            return null;
        }
    }

    const reinicioJuego = () => {
        setPuntosEllos(0);
        setPuntosNosotros(0);
    }

    return (
        <div className="app">
            <h1>Contador Truco</h1>
            <button onClick={() => reinicioJuego()}>Reinicio</button>
            <div className='container'>
                <div className='container-ellos'>
                    <h2>Ellos</h2>
                    <div className='botones'>
                        <button onClick={() => handlePuntosEllos("+")}>+</button>
                        <button onClick={() => handlePuntosEllos("-")}>-</button>
                    </div>
                    <div className='puntos' id='puntos-ellos'>
                        {puntosEllos === 0 ? "" :
                            <img src={`/fosforo/fosforos-${puntosEllos}.png`} alt='fosforo' />
                        }
                    </div>
                    { puntosEllos === 15 ? <div><h3>Ganador!!!!</h3></div> : "" }
                </div>

                <div className='container-nosotros'>
                    <h2>Nosotros</h2>
                    <div className='botones'>
                        <button onClick={() => handlePuntosNosotros("+")}>+</button>
                        <button onClick={() => handlePuntosNosotros("-")}>-</button>
                    </div>
                    <div className='puntos'>
                        {puntosNosotros === 0 ? "" :
                            <img src={`/fosforo/fosforos-${puntosNosotros}.png`} alt='fosforo' />
                        }
                    </div>
                    { puntosNosotros === 15 ? <div><h3>Ganador!!!!</h3></div> : "" }
                </div>
            </div>
        </div>
    )
}
