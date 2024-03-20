import React, {useState} from 'react';
import classes from './PrivateLayout.module.scss';
import Sider from "@/layouts/PrivateLayout/components/Sider";
import cx from 'classnames';
import Header from "@/layouts/PrivateLayout/components/Header";

interface IPrivateLayoutProps{
    children: React.ReactNode;
}
const PrivateLayout: React.FC<IPrivateLayoutProps> = ({children}) => {
    const [isSiderOpen, setIsSiderOpen] = useState(true);

    const defaultMenuItems = [{
        label: 'Calendar',
        url: '/calendar',
    }]

    //here is going to be computing the sider content, etc.
    return (
        <div className={classes.privateLayout}>
            <div className={cx(classes.siderWrapper, {[classes.open]: isSiderOpen})}>
                <Sider/>
            </div>
            <Header
                additionalContent='content'
                description='description'
                onBurgerClick={() => setIsSiderOpen(true)}
            />
            <div
                onClick={() => setIsSiderOpen(false)}
                className={cx(classes.pad, {[classes.show]: isSiderOpen})}
            />
        </div>
    );
};

export default PrivateLayout;