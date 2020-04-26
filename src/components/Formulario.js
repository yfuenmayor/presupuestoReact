import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({setGasto, setCreargasto}) => {

    //State de nombre y State de cantidad
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    //State de Validacion
    const [error, setError] = useState(false);

    //Creando funcion de Submit
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if ( cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        //Construir el gasto
        const gasto = {
            //En nombre y cantidad como Key = value solo se coloca una vez
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        setGasto(gasto);
        setCreargasto(true);

        //resetear Formulario
        setNombre('');
        setCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            { error ? <Error mensaje="Todos los campos son requeridos" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>    
                <input 
                    type="text"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <label>Cantidad Gasto</label>    
                <input 
                    type="number"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                    type="submit"
                    value="Agregar Gasto"
                    className="button-primary u-full-width"
                />
        </form>
     );
}

//Documentando props
Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCreargasto: PropTypes.func.isRequired
}
 
export default Formulario;