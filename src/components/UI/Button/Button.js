import React from 'react'
import './Button.css'

function CButton(props){
    const cls = [
        'CButton', props.type
    ]

    return(
        <button onClick={props.onClick}
                className={cls.join(' ')}
                disabled = {props.disabled}>
            {props.children}
        </button>
    )
}

export default CButton