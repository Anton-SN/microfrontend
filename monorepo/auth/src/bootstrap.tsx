import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from './App';

const mount = (el: HTMLElement, Router = MemoryRouter) => {
    const root = ReactDOM.createRoot(el as HTMLElement)
    root.render(<Router><App /></Router>);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('dev-au-root') as HTMLElement;

    if (devRoot) {
        mount(devRoot, BrowserRouter);
    }
}

export { mount };
