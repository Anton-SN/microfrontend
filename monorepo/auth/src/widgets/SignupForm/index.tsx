import React from 'react';
import { Link } from 'react-router-dom';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../ui';

interface Inputs {
    email: string,
    password: string,
    confirm: string,
}

const validationSchema = z
    .object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(6, 'Password must contain 6 characters'),
        confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
        message: 'Passwords don\'t match',
        path: ['confirm'], // path of error
    });

export const SignupForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(validationSchema), reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<Inputs> = data => data;

    return <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to SUGAR</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email address" name="email" register={register} error={errors?.email?.message} />
            <Input name="password" label="Password" type="password" register={register} error={errors?.password?.message} />
            <Input name="confirm" label="Repeat the password" type="password" register={register} error={errors?.confirm?.message} />
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                </button>
            </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
            Do you have an account?
            <Link to="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"><span> Sign in</span></Link>
        </p>
    </div>
}
