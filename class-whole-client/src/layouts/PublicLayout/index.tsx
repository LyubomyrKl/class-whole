import React from 'react';
import classes from './PublicLayout.module.scss';
import Summer from "@/assets/images/PublicLayout/summer.jpeg";

interface IPrivateLayoutProps{
    children: React.ReactNode;
}
const PublicLayout: React.FC<IPrivateLayoutProps> = ({children}) => {
    return (
        <div className={classes.publicLayout}>
            <div>
                {children}
                <div className={classes.copyright}>© 2023 all rights reserved</div>
            </div>
            <div className={classes.seasonIllustrationWrapper}>
                <img className={classes.seasonIllustration} src={Summer} alt="Season"/>
            </div>
        </div>
    );
};

export default PublicLayout;