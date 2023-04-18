import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

const AuthLazy = lazy(() => import('./Apps/AuthApp'));

const App = () => {
    console.warn('start container')
    return (
        <>
            <h1>Hello world!</h1>
            <div>
                <h2>Links</h2>
                <Link to={'auth/login'}>LOGIN</Link>
                <br/>
                <Link to={'auth/signup'}>SIGNUP</Link>
            </div>
            <Suspense fallback={<h2>Loading ...</h2>}>
                <Routes>
                    <Route path="/auth/*" element={<AuthLazy />}/>
                    <Route path="*" element={<h2>not found</h2>}/>
                </Routes>
            </Suspense>
        </>
    )
};

export default App;
