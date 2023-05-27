import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginPage from './JavaScript/loginPage';
import TopNavigation from './JavaScript/navBar';
import './CSS/navBar.css'
import './CSS/loginPage.css'
import './JavaScript/mainPage'
import MainPage from "./JavaScript/mainPage";
import MainPageSearch from './JavaScript/mainPageSearch';

function App() {
    return (
        <Router>
            <div>
                <TopNavigation />
                <Routes>
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Search" element={<MainPageSearch/>} />
                    <Route path="/Sikumonet" element={<MainPage />} />
                    {/* Define other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;