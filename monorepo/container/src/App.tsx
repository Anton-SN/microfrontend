import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AuthLazy = lazy(() => import('./Apps/AuthApp'));

const App = () => {
    console.warn('start container')
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello world!</h1>} />
                <Route path="/auth" element={<AuthLazy />}/>
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </BrowserRouter>
    </>
    )
};

export default App;
