/*
|--------------------------------------------------------------------------
| Main entry point
|--------------------------------------------------------------------------
*/

import 'tailwindcss/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AuthApp from './App';

ReactDOM.render(
    <React.StrictMode>
        {/* "Mount" this app under the /auth URL pathname. All routes and links
        are relative to this name. */}
        <BrowserRouter basename="auth">
            <AuthApp />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
