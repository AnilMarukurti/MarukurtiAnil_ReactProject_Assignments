import React from 'react'
import "./Toggle.css";

function Toggle({toggled, setToggled}) {
    const toggleState = () =>{
        setToggled(!toggled);
    }
    return (
        <label className="switch">
            <input type="checkbox" checked={toggled} onClick={toggleState}/>
            <span className="slider round"></span>
        </label>
    )
}

export default Toggle
