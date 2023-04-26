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
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{title}</label>
            <input name={name} type={type} onChange={onChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    )
}
