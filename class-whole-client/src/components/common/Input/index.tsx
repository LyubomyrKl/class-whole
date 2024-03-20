import React from 'react';
import classes from './input.module.scss';
import withInputLogic, {IInputProps} from "@/hoc/withInputLogic";


const Input: React.FC<IInputProps> =
    ({
        name,
        label,
        placeholder,
        register,
        error,
        errorOverrideMessage,
        type
    }) => {

    return (
        <div className={classes.defaultInputWrapper}>
            {label && <label className={classes.label}>{label}</label>}
            <input type='password' name={name} {...register} className={classes.input} placeholder={placeholder}/>
            {error && (errorOverrideMessage || error.message)}
        </div>
    );
};

export default withInputLogic(Input);