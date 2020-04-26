import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {

      //Creamos los States del presupuesto y el restante
      const [presupuesto, setPresupuesto] = useState(0);
      const [restante, setRestante] = useState(0);
      //Creamos un State para la carga condicional de componente
      const [mostrarpregunta, setMostrarpregunta] = useState(true);
      //Creamos State de los gastos
      const [gastos, setGastos] = useState([]);
      //Creamos State de cada gasto
      const [gasto, setGasto] = useState({});
      // State para validar si hay gastos cargados
      const [creargasto, setCreargasto] = useState(false);
      

      //useEfect para controlar el restante del gasto
      useEffect(() => {
            //ejecutamos si hay gasto
            if (creargasto) {
                  //guardamos el gasto en el listado
                  setGastos([
                        ...gastos,
                        gasto
                  ]) 

                  //Restando del presupuesto
                  const presupuestoRestante = restante - gasto.cantidad;
                  setRestante(presupuestoRestante);
                  
                  //retornamos a false el state de crear
                  setCreargasto(false);
            }
      }, [gasto, creargasto, restante, gastos])


  return (
        <div className="container">
              <header>
                  <h1>Gasto Semanal</h1>

                  <div className="contenido contenido-principal">
                        { mostrarpregunta ? 
                              (
                                    <Pregunta 
                                          setPresupuesto={setPresupuesto}
                                          setRestante={setRestante}
                                          setMostrarpregunta={setMostrarpregunta}
                                    />
                              ):(
                                    <div className="row">
                                          <div className="one-half column">
                                                <Formulario
                                                   setGasto={setGasto}
                                                   setCreargasto={setCreargasto}
                                                />
                                          </div>
                                          <div className="one-half column">
                                                <Listado 
                                                   gastos={gastos}
                                                />
                                                <ControlPresupuesto 
                                                   presupuesto={presupuesto}
                                                   restante={restante}
                                                />
                                          </div>
                                    </div>
                        )}
                  </div>
              </header>
        </div>
  );

}

export default App;
