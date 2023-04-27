import React from 'react';
import { Link } from "react-router-dom";
import { Input } from '../../ui';

export const SignupForm: React.FC = () => {
    return <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to SUGAR</h1>
        <form className="space-y-6" action="#" method="POST">
            <Input name="email" title="Email address" type="email" onChange={() => { console.log(123)}} />
            <Input name="password" title="Password" type="password" onChange={() => { console.log(123)}} />
            <Input name="password" title="Repeat the password" type="password" onChange={() => { console.log(123)}} />
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
