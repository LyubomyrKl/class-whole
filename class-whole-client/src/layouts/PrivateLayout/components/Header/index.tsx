import React from 'react';

import classes from './Header.module.scss';
import {RxHamburgerMenu} from "react-icons/rx";

interface IHeaderProps{
    onBurgerClick: () => void;
    description: React.ReactNode;
    additionalContent: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({onBurgerClick, additionalContent, description}) => {
    return (
        <div className={classes.header}>
            <div className={classes.descriptionWrapper}>
                <div onClick={onBurgerClick} className={classes.burger}>
                    <RxHamburgerMenu/>
                </div>
                <div>{description}</div>
            </div>
            <div className={classes.profileInfo}>
                <div>{additionalContent}</div>
                <div className={classes.profilePhoto}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VaZbSHXBZ8UfnW0nh-nIkMD7TlTL9Cz6TQRYNOkDF5uh_T98ic9CYTgLvWpxjdPkUJI&usqp=CAU" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;