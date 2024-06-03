import React from 'react'; 
import {useRef, useState} from 'react'; 
 
export const Conversor = () => { 
 
    const dolaresRef = useRef(); 
    const [bolivianos, setBol] = useState(0); 
 
    const calcular = () => { 
        const dolaresValue = dolaresRef.current.value; 
        const bolivianos = dolaresValue * 7; 
        setBol(bolivianos); 
    } 
    return ( 
        <div> 
            <input className="formulario" type="text" ref={dolaresRef} /> 
            <button className="botonInc" onClick={calcular}>Enviar</button> 
            <p className="res">{bolivianos}</p> 
        </div> 
    ) 
}
