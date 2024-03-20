import React from 'react';
import {Link, LinkProps} from "react-router-dom";
import classes from './Link.module.scss';
import cx from 'classnames';
interface IAppLinkProps extends LinkProps{
    children: React.ReactNode;
    className: string;
}

const AppLink: React.FC<IAppLinkProps> = ({children, classNames, ...routerLinkProps}) => {
    return (
        <Link
            className={cx(classes.appLink, classNames)}
            {...routerLinkProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;