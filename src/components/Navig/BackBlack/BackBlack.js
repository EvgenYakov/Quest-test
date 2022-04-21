import React from 'react'
import './BackBlack.css'

function BackBlack (props) {
    console.log('2');
    return(<div onClick={props.onClick} className = 'BackBlack'/>)
}


export default BackBlack