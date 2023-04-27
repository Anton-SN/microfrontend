import React from 'react';
import { UseFormRegister } from "react-hook-form";

interface Props {
    name: string,
    label: string,
    type?: React.HTMLInputTypeAttribute,
    register: UseFormRegister<any>
}
export const Input: React.FC<Props> = ({ name, label, type = 'text', register  }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">{label}</label>
            <input type={type} {...register(name)} className="block bg-gray-900 border-gray-600 w-full rounded-md border-0 py-1.5 px-2.5 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    )
}
