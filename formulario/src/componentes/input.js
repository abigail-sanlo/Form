import React from "react";
import { GrupoInput, LeyendaError, IconoValidacion, Label, Input } from "../elementos/Formularios";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ label, tipo, placeholder, name, leyendaError }) => {
    return (
        <div>
            <GrupoInput>
                <Label htmlFor={name}>{label}</Label>
                <Input type={tipo} placeholder={placeholder} id={name} />
                <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </div>
    );
};

export default ComponenteInput;