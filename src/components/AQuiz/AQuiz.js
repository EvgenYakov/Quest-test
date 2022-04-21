import React from 'react'
import AnswerList from './AList/AList'
import './AQuiz.css'

function AQuiz(props){
    return(
        <div className='AQuiz'>
            <p className='Question'>
                <span>
                    <strong>{props.length}. </strong>
                    {props.question}
                </span>
                <small>{props.activeQuest} из {props.length}</small>
            </p>
            <AnswerList
                ans = {props.ans}
                onAnswerClick = {props.onAnswerClick}
                ansState = {props.ansState}
            />
        </div>
    )
}

export default AQuiz