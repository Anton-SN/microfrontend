import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mount } from "auth/AuthApp";

const AuthApp = () => {
    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
            mount(ref.current, {
                initPath: location.pathname,
                onNavigate: navigate
            });
    }, []);

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("[auth] navigated", { detail: location.pathname }));
    }, [location])

    return <div ref={ref}></div>;
};

export default AuthApp
