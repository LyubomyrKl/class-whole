import React from 'react';
import PublicLayout from "@/layouts/PublicLayout";
import classes from './SignUp.module.scss';
import cx from 'classnames';

import SignUpForm from "@/modules/SignUpForm";

const SignUp = () => {
    return (
        <PublicLayout>
            <div className={cx(classes.signUpWrapper)}>
                <h1 className={cx('title', 'mb-20')}>Congratulation! 🫡</h1>
                <p className={cx('description', 'mb-30')}>
                    Today is a new day. It's your day. You shape it.<br/>
                    Sign in to start a new study day.
                </p>
                <SignUpForm/>
            </div>

        </PublicLayout>
    );
};

export default SignUp;