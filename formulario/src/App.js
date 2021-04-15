import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Formulario, Label, ContenedorBotonCentrado, MensajeExito, MensajeError, ContenedorTerminos, Boton } from "./elementos/Formularios";
import Input from "./componentes/input";
const App = () => {
  return (
    <main>
      <h1 class="header">GNP Seguros de Autos</h1>
      <p>Cotiza tu Seguro de Auto al Mejor precio</p>
      <Formulario action="">
        <Input
          label="nombre"
          tipo="text"
          placeholder="nombre completo"
          name="usuario"
          leyendaError="Favor de poner su nombre" />
        <Input
          label="telefono"
          placeholder="telefono" />
        <Input
          tipo="mail"
          label="correo"
          placeholder="correo electronico" />


        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto que he leido el aviso de privacidad
          </Label>
        </ContenedorTerminos>
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error: </b>
             Favor de rellenar correctamente </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Se ha enviado exitosamente</MensajeExito>
        </ContenedorBotonCentrado>

      </Formulario>
    </main >
  );
};


export default App;