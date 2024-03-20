import React from 'react';
import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {InputType} from "zlib";

export interface IInputProps{
    type?: InputType
    name?: string;
    register?: UseFormRegisterReturn<string>;
    label?: string;
    placeholder?: string;
    error?: FieldError | undefined;
    errorOverrideMessage?: React.ReactNode | string;
}

const withInputLogic = (WrappedComponent) => {
    const WithInputLogic = (props:IInputProps) => {

        return (
            <WrappedComponent{...props}/>
        );
    };

    return WithInputLogic;
};

export default withInputLogic;