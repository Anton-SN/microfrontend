import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(<BrowserRouter><App /></BrowserRouter>);
