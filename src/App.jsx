import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Navbar from './components/Navigation/'
import Home from './pages/home/'
import Login from './pages/login/'
import Register from './pages/signup/'
import Profile from './pages/profile/'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}>Home</Route>
                    <Route path="/login" element={<Login />}>Login</Route>
                    <Route path="/register" element={<Register />}>register</Route>
                    <Route path="/profile" element={<Profile />}>profile</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;