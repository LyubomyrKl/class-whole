import React from 'react';
import * as Yup from 'yup';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import PublicLayout from "@/layouts/PublicLayout";
import FormInput from "@/components/FormInput";
import AppLink from "@/components/common/Link";
import Paths from "@/routes/Paths";
import classes from "@/modules/SignInForm/SignInForm.module.scss";
import Button from "@/components/common/Button";
import cx from 'classnames';

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
}

const SignUpForm = () => {

    const formSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required"),
        lastName: Yup.string()
            .required("First name is required"),
        email: Yup.string()
            .required("Email is required")
            .email('Invalid email address'),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password length should be at least 8 characters")
            .max(36, "Password cannot exceed more than 12 characters"),
        cpassword: Yup.string()
            .required("Repeat password is required")
            .oneOf([Yup.ref("password")], "Passwords do not match")
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

    return (
        <form>
            <FormInput
                error={errors.firstName}
                label='First name'
                placeholder='John'
                register={register('firstName', {required: true})}
            />
            <FormInput
                error={errors.lastName}
                label='Last name'
                placeholder='Doe'
                register={register('lastName', {required: true})}
            />
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
            <FormInput
                error={errors.cpassword}
                register={register('cpassword', {required: true})}
                label='Confirm Password'
                type='password'
                placeholder='At least 8 characters'
            />
            <AppLink
                to={Paths.signIn}
                className={cx(classes.toSignInLink, 'mb-15')}>
                Already have account?
            </AppLink>
            <Button className='mb-30'>
                Sign In
            </Button>
        </form>
    );
};

export default SignUpForm;