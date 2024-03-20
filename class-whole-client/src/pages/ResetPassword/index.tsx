import React from 'react';
import * as Yup from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormInput from "@/components/FormInput";
import AppLink from "@/components/common/Link";
import Paths from "@/routes/Paths";
import Button from "@/components/common/Button";
import PublicLayout from "@/layouts/PublicLayout";
import cx from 'classnames';
import classes from './ResetPassword.module.scss';

type Inputs = {
    email: string;
}

const ResetPassword = () => {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email('Invalid email address'),
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    })
    const onSubmit: SubmitHandler<Inputs | undefined> = (data) => console.log(data)

    return (
        <PublicLayout>
            <div className={cx(classes.resetPasswordWrapper)}>
                <h1 className={cx('title', 'mb-20')}>Don't worry 🙂</h1>
                <p className={cx('description', 'mb-20')}>
                    We'll sent reset link on you email
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        error={errors.email}
                        label='Email'
                        placeholder='expample@email.com'
                        register={register('email', {required: true})}
                    />

                    <AppLink
                        to={Paths.signIn}
                        className={cx('mb-15', classes.backToSignInLink)}>
                        Back to sign in
                    </AppLink>
                    <Button className='mb-30'>
                        Sent email
                    </Button>
                </form>
            </div>
        </PublicLayout>
    )
};

export default ResetPassword;