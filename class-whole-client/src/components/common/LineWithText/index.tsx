import React from 'react';
import classes from './LineWithText.module.scss';
import cx from 'classnames';
interface ILineWithTextProps{
    text: string;
    className: string;
}

const LineWithText: React.FC<ILineWithTextProps> = ({text, className}) => {
    return (
        <div className={cx(classes.lineWithText, className)}>
           <span className={classes.text}>{text}</span>
        </div>
    );
};

export default LineWithText;