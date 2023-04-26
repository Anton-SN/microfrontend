import React from 'react';
import { Link } from "react-router-dom";
import { Input } from '../../ui';

export const LoginForm: React.FC = () => {
    return <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
            <Input name="email" title="Email address" type="email" onChange={() => { console.log(123)}} />
            <Input name="password" title="Password" type="password" onChange={() => { console.log(123)}} />
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
