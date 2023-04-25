import React, {useEffect} from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";

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
        <h1>Auth project</h1>
            <div>
            <h2>Links</h2>
            <Link to={'auth/login'}>LOGIN</Link>
            <br/>
            <Link to={'auth/signup'}>SIGNUP</Link>
            <br/>
            <Link to={'/auth/asa'}>HOME</Link>
            </div>
            <Routes>
                <Route path="auth/login" element={<Login />}/>
                <Route path="auth/signup" element={<Signup />}/>
                <Route path="*" element={<h2>Not found</h2>}/>
            </Routes>
    </>
    )
}

export default App;
