import React from 'react';
import {IInputProps} from "@/hoc/withInputLogic";
import classes from "./FormInput.module.scss";
import cx from 'classnames';

interface IFormInputProps extends IInputProps{
    success?: boolean;
    type: string;
}

const FormInput = ({
    label,
    placeholder,
    errorOverrideMessage,
    error,
    register,
    name,
    success = false,
    type
}:IFormInputProps) => {

    const inputClasses = cx(classes.formInput, {
        [classes.error]: error,
        [classes.success]: success,
    })

    return (
        <div className={classes.formInputWrapper}>
            {label && <label className={classes.formInputLabel}>{label}</label>}
            <input
                type={type}
                name={name}
                {...register}
                placeholder={placeholder}
                className={inputClasses}
            />
            <span className='errorMessage'>{error && (errorOverrideMessage || error.message)}</span>
        </div>
    );
};

export default FormInput;