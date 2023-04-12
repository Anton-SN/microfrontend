import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const AuthLazy = lazy(() => import('./Apps/AuthApp'));

const App = () => {
    console.warn('start container')
    // @ts-ignore
    return (
    <>
        <BrowserRouter>
            <div>
                <h2>Links</h2>
                <Link to={'auth/login'}>LOGIN</Link>
                <br/>
                <Link to={'auth/signup'}>SIGNUP</Link>
                <br/>
                <Link to={'/'}>HOME</Link>
            </div>
            <Suspense fallback={<h2>Loading ...</h2>}>
                <Routes>
                    <Route path="/" element={<h1>Hello world!</h1>} />
                    <Route path="/auth/login" element={<AuthLazy />}/>
                    <Route path="/auth/signup" element={<AuthLazy />}/>
                    <Route path="*" element={<h2>Not Found</h2>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </>
    )
};

export default App;
