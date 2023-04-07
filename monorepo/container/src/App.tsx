import React, { lazy } from 'react';

const AuthLazy = lazy(() => import('./Apps/AuthApp'));

const App = () => {
    console.warn('start container')
    return (
        <>
            <h1>Hello world!</h1>
            <AuthLazy />
        </>
    )
};

export default App;
