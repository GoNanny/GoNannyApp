import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginPage from './JavaScript/loginPage';
import TopNavigation from './JavaScript/navBar';
import './JavaScript/navBar.css'
import './JavaScript/loginPage.css'
import './JavaScript/mainPage'
import MainPage from "./JavaScript/mainPage";

function App() {
    return (
        <Router>
            <div>
                <TopNavigation />
                <Routes>
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Sikumonet" element={<MainPage />} />
                    {/* Define other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;