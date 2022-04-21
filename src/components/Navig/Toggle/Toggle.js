import React from "react";
import './Toggle.css'

function Toggle(props){
    const cls = [
        'lab',
    ]

    if (!props.isOpen){
        cls.push('open')
    }

    return(
        <div>
            <input type="checkbox" id="toggle_checkbox"/>
                <label htmlFor="toggle_checkbox" className={cls.join(' ')} onClick={props.onClick}>

                </label>
        </div>
    )
}

export default Toggle