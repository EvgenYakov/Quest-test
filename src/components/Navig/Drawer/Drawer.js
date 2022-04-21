import React from "react";
import './Drawer.css'
import BackBlack from "../BackBlack/BackBlack";

const links = [1,2,3]
class Drawer extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    renderLinks(){
        return(links.map((obj,i)=>{
                return(
                    <li key={i}>
                      <a>Link  {obj}</a>
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