import React from 'react';
import SignInForm from "@/modules/SignInForm";
import PublicLayout from "@/layouts/PublicLayout";

import classes from './SignIn.module.scss';
import cx from 'classnames';
import AppLink from "@/components/common/Link";
import Paths from "@/routes/Paths";
const LoginPage = () => {

    return (
        <PublicLayout>
            <div className={classes.signInWrapper}>
                <h1 className={cx('title', 'mb-20')}>Welcome Back 👋</h1>
                <p className={cx('description', 'mb-50')}>
                    Today is a new day. It's your day. You shape it.<br/>
                    Sign in to start a new study day.
                </p>
                <SignInForm/>
                <span className='text-align-center'>Don't you have an account? <AppLink to={Paths.signUp} className={classes.signUpLink}>Sign up</AppLink></span>
            </div>
        </PublicLayout>
    )
};

export default LoginPage;