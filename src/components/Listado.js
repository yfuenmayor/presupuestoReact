import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Listado de Gastos</h2>

        {gastos.map( gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))}

    </div>
)

//Documentando props
Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;