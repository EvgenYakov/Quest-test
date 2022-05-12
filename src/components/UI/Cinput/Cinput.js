import React from "react";
import './Cinput.css'

function isInvalid({valid,shouldVal,touch}){
    return !valid && touch && shouldVal
}

function Cinput(props){
    const cls = ["Cinput"];
    const typeIn = props.type || 'text';
    const htmlFor = `${typeIn}-${Math.random()}`

    if(isInvalid(props)){
        cls.push("invalid");
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={typeIn}
                onChange={props.onChange}
                id={htmlFor}
                value={props.value}
            />

            {
                isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null
            }

        </div>
    )
}

export default Cinput