import React from 'react';

interface Props {
    name: string,
    onChange: (event: React.SyntheticEvent) => void,
    title: string,
    type?: React.HTMLInputTypeAttribute,
}
export const Input: React.FC<Props> = ({ name, title, onChange, type = 'text',  }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">{title}</label>
            <input name={name} type={type} onChange={onChange} className="block bg-gray-900 border-gray-600 w-full rounded-md border-0 py-1.5 px-2.5 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    )
}
