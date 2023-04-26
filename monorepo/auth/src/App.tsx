import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import './index.css'

import Login from "./app/pages/login";
import Signup from "./app/pages/signup";

interface AppProps {
    onNavigate: (pathname: string) => void,
}

const App: React.FC<AppProps> = ({ onNavigate }) => {
    const location = useLocation();
    const navigate = useNavigate();

    if(onNavigate) {
        useEffect(() => {
            const navigationEventHandler = (event: Event) => {
                const pathname = (event as CustomEvent<string>).detail;
                if (pathname !== location.pathname && pathname.startsWith('/auth')) {
                    navigate(pathname);
                }
            };
            window.addEventListener("[auth] navigated", navigationEventHandler);

            onNavigate(location.pathname)

            return () => {
                window.removeEventListener("[auth] navigated", navigationEventHandler);
            };
        }, [location])
    }

    return (
    <>
        <h1 className="text-3xl font-bold underline">Auth project</h1>
            <Routes>
                <Route path="auth/login" element={<Login />}/>
                <Route path="auth/signup" element={<Signup />}/>
                <Route path="*" element={<Navigate to="auth/login" />}/>
            </Routes>
    </>
    )
}

export default App;
