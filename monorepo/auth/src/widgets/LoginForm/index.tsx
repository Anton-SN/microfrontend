import React from 'react';
import { Input } from '../../ui';

export const LoginForm: React.FC = () => {
    return <>
        <Input onChange={(e) => { console.log(e)}} />
    </>
}
