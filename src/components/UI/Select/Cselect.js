import React from 'react';


export default function Cselect(props){
    const htmlFor = `${props.label}-${Math.random()}`
    return(
        <div className="Cselect">
            <label htmlFor={htmlFor}>
                {props.label}
            </label>
            <select
            id={htmlFor}
            onChange={props.onChange}
            value={props.value}
            >
                {props.items.map((item,i)=> <option value={item.value} key={item.value + i}>
                    {item.text}
                </option>)}
            </select>
        </div>
    )
}