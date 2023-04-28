import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, MemoryRouter, type NavigateFunction } from 'react-router-dom';
import App from './App';

interface MountProps {
    initPath: string,
    onNavigate?: NavigateFunction
}

const mount = (el: HTMLElement, { initPath, onNavigate }: MountProps, Router = MemoryRouter): void => {
    const root = ReactDOM.createRoot(el )

    root.render(<Router initialEntries={[initPath]}><App onNavigate={onNavigate}/></Router>);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('dev-au-root') as HTMLElement;

    mount(devRoot, { initPath: '' }, BrowserRouter);
}

export { mount };
