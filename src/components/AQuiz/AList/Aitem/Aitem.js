import React from "react";
import './Aitem.css'

function Aitem(props){
    const cls = ['Aitem'];
    if (props.ansState){
        cls.push(props.ansState)
    }
    return(
    <li className={cls.join(' ')} onClick={()=>props.onAnswerClick(props.ans.id)}>
        {props.ans.text}
    </li>
    )
}
export default Aitem;