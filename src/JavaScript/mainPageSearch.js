import React, { useState } from 'react';
import '../CSS/mainPageSearch.css'
import DropdownMajor from './dropDownMajor.js';
import DropdownAcademy from './dropDownAcademy.js';

function MainPageSearch() {

    return (
        <div class="mainSearch">
            <h2 className="study">Where do yo study?</h2>
            <div className="dropdown_academy">
                <DropdownAcademy />
            </div>
            <h2 className="major">What is your major?</h2>
            <div className="dropdown_major">
                <DropdownMajor />
            </div>
            
            <button className='btn'>Find Courses!</button>
        </div>
    );
}

export default MainPageSearch;