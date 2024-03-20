import React from 'react';

import classes from './card.module.scss';

interface ICardProps{
    children: React.ReactNode
}

const Card:React.FC<ICardProps> = ({children}) => {
    return (
        <div className={classes.cardWrapper}>
            {children}
        </div>
    );
};

export default Card;