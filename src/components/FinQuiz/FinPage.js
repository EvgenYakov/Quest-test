import React from "react";
import './FinPage.css'
import CButton from "../UI/Button/Button";

function FinPage(props){
    const count = (Object.keys(props.results)).reduce((count,i)=>{
        if(props.results[i] === 'success'){
            ++count;
        }
        return count;
    })
    return(
        <div className='FinPage'>
        <ul>
            {props.quiz.map((obj, i)=>{
                const text = obj.question + (props.results[obj.id] === 'success' ?  '✅' : '❌')
                return(<li key={i}>
                        <strong>{i+1}. </strong>
                        {text}
                    </li>
                );
            })
            }
        </ul>

            <p>{count} из {props.quiz.length}</p>
            <div>
                <CButton onClick={props.finClick} type = "primary">повторить</CButton>
                <CButton onClick={props.onRetry} type = "success">перейти на следую страницу</CButton>
            </div>
        </div>
    )
}
export default FinPage