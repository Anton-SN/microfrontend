import React from 'react';
import { type UseFormRegister } from 'react-hook-form';

interface Props {
    name: string,
    label: string,
    register: UseFormRegister<any>
    type?: React.HTMLInputTypeAttribute,
    error?: string,
}
export const Input: React.FC<Props> = ({ name, label, register, error, type = 'text'  }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">{label}</label>
            <input type={type} {...register(name)} className={`block bg-gray-900 border-gray-600 w-full rounded-md border-0 py-1.5 px-2.5 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset ${error != null ? 'focus:ring-red-600' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6 autofill:!bg-gray-900 autofill:!text-white`} />
            {error != null && <p className="block text-sm font-medium leading-6 text-red-700">{error}</p>}
        </div>
    )
}
