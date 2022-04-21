import React from "react";
import './AList.css'
import Aitem from "./Aitem/Aitem";

function AnswerList(props){
    return <ul className='Alsit'>
        {props.ans.map((ans, i )=>{
            return (<Aitem ans={ans} key={i} onAnswerClick = {props.onAnswerClick}
            ansState={props.ansState ? props.ansState[ans.id] : null}
            />)
        })}
    </ul>
}

export default AnswerList