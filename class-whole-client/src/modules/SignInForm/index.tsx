import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import FormInput from "@/components/FormInput";
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "@/components/common/Button";
import AppLink from "@/components/common/Link";
import classes from './SignInForm.module.scss'
import cx from 'classnames';
import LineWithText from "@/components/common/LineWithText";
import Paths from "@/routes/Paths";

type Inputs = {
    email: string
    password: string
}

const SignInForm: React.FC = () => {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email('Invalid email address'),
        password: Yup.string()
            .required("Password is required")
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                error={errors.email}
                label='Email'
                placeholder='expample@email.com'
                register={register('email', {required: true})}
            />
            <FormInput
                error={errors.password}
                register={register('password', {required: true})}
                label='Password'
                type='password'
                placeholder='At least 8 characters'
            />
            <AppLink
                to={Paths.resetPassword}
                className={cx(classes.forgotPasswordLink, 'mb-15')}>
                Forgot Password
            </AppLink>
            <Button className='mb-30'>
                Sign In
            </Button>
            <LineWithText text='Or' className='mb-30'/>
        </form>
    );
};

export default SignInForm;