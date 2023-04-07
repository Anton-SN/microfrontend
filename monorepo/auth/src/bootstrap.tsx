import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el: HTMLElement) => {
    const root = ReactDOM.createRoot(el as HTMLElement)
    root.render(<App />);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('dev-au-root') as HTMLElement;

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
