import React from "react";
import './Drawer.css'
import BackBlack from "../BackBlack/BackBlack";
import {NavLink} from "react-router-dom";

const links = [{to:'/', exact: true, label: "Список тестов"},
    {to:'/auth', label: "Аутентификация", exact: false},
    {to:'quiz-creator', label:"Редактор теста", exact: false}
]
class Drawer extends React.Component{
    renderLinks(){
        return(links.map((obj,i)=>{
                return(
                    <li key={i}>
                      <NavLink to={obj.to} exact={obj.exact} onClick={this.props.onClick}>
                          {obj.label}
                      </NavLink>
                    </li>
                )
            })
        )
    }

    render() {
        const cls = ['Drawer']

        if (this.props.isOpen){
            cls.push('close')
        }

        return(
            <React.Fragment>
           {!this.props.isOpen ? <BackBlack onClick = {this.props.onClick}/> : null}
                <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            </React.Fragment>

    )
    }
}


export default Drawer