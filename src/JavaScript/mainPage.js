import React, { useState } from 'react';
import '../CSS/mainPage.css'
import './mainPageSearch'
import MainPageSearch from './mainPageSearch';

function MainPage() {

    return (
        <div>
            <h1>Looking for <br></br>a way <br></br>to exell?</h1>
            <MainPageSearch/>
        </div>
    );
}

export default MainPage;