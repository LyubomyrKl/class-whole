import React from 'react';

import classes from './Sider.module.scss';

interface ISiderProps{
    children: React.ReactNode;
}

const Sider: React.FC<ISiderProps> = ({children}) => {
    return (
        <div className={classes.sider}>
            {children}
        </div>
    );
};

export default Sider;