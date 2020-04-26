import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensaje}) => (
    <p className="error alert-danger alert">{mensaje}</p>
)
 
//Documentando props
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;