import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate, type NavigateFunction } from 'react-router-dom';
import './index.css'

import Login from './app/pages/login';
import Signup from './app/pages/signup';

interface AppProps {
    onNavigate?: NavigateFunction,
}

const App: React.FC<AppProps> = ({ onNavigate }) => {
    const location = useLocation();
    const navigate = useNavigate();

        useEffect(() => {
            if (onNavigate != null) {
                const navigationEventHandler = (event: Event): void => {
                    const pathname = (event as CustomEvent<string>).detail;
                    if (pathname !== location.pathname && pathname.startsWith('/auth')) {
                        navigate(pathname);
                    }
                };
                window.addEventListener('[auth] navigated', navigationEventHandler);
                console.log(123);
                console.log(123);
                console.log(123);
                onNavigate(location.pathname)

                return () => {
                    window.removeEventListener('[auth] navigated', navigationEventHandler);
                };
            }
        }, [location])

    return (
    <div className="bg-black h-screen">
            <Routes>
                <Route path="auth/login" element={<Login />}/>
                <Route path="auth/signup" element={<Signup />}/>
                <Route path="*" element={<Navigate to="auth/login" />}/>
            </Routes>
    </div>
    )
}

export default App;
