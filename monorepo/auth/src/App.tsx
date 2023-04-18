import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

import Login from "./app/pages/login";
import Signup from "./app/pages/signup";

const App: React.FC = () => {
    console.warn('start auth')
    return (
    <div>
        <h1>Auth project</h1>
            <div>
            <h2>Links</h2>
            <Link to={'login'}>LOGIN</Link>
            <br/>
            <Link to={'signup'}>SIGNUP</Link>
            <br/>
            <Link to={'/asa'}>HOME</Link>
            </div>
            <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="signup" element={<Signup />}/>
                <Route path="*" element={<h2>Not found</h2>}/>
            </Routes>
    </div>
    )
}

export default App;
