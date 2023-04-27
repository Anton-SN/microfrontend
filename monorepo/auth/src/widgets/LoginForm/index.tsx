import React from 'react';
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from '../../ui';

type Inputs = {
    email: string,
    password: string,
};

export const LoginForm: React.FC = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
        <h1 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">Login to SUGAR</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email address" name="email" register={register} />
            <Input name="password" label="Password" type="password" register={register} />
            <div>
                <button type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                    in
                </button>
            </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/auth/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"><span> Sign up</span></Link>
        </p>
    </div>
}
