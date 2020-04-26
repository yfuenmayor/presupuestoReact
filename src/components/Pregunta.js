import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({setPresupuesto,setRestante,setMostrarpregunta}) => {    

    // Generando STATES
        //STATE de cantidad de presupuesto
        const [cantidad, setCantidad] = useState(0);
        //STATE de error de validacion
        const [error, setError] = useState(false);

    //Funcion del Listener para guardar en el state el valor
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    }

    //Funcion del Submit del form
    const enviarPresupuesto = e => {
        e.preventDefault();

        //1.-Validacion
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //2.-Eliminamos el mensaje al pasar la validacion
        setError(false);
        //3.-Enviamos el valor del presupuesto a ambos States
        setPresupuesto(cantidad);
        setRestante(cantidad);
        //4.-Cambiamos el componente a mostrar en el App
        setMostrarpregunta(false);

    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null }
            <form
                onSubmit={enviarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    placeholder="Coloca tu presupuesto"
                    value="Definir presupuesto"
                />
                
            </form>
        </Fragment>
     );
}

//Documentando props
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired
}
 
export default Pregunta;