import React, {ButtonHTMLAttributes} from 'react';
import classes from './Button.module.scss';
import cx from 'classnames';

interface IButtonProp extends ButtonHTMLAttributes<React>{
   children: React.ReactNode
}
const Button: React.FC<IButtonProp> = ({
    children,
    className,
    ...props
    }) => {
    return (
        <button className={cx(classes.button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;