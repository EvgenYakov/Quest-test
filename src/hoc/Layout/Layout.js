import React from 'react'
import './Layout.css'
import Toggle from "../../components/Navig/Toggle/Toggle";
import Drawer from "../../components/Navig/Drawer/Drawer";

class Layout extends React.Component{
    state ={
        menu:false
    }
    toggleClick(){
        this.setState({menu:!this.state.menu})
    }


    render() {
        return(
            <div className= 'Layout'>
                <Drawer
                    isOpen={this.state.menu}
                    onClick={()=>this.toggleClick()}
                />
                <Toggle
                onClick={()=>this.toggleClick()}
                isOpen={this.state.menu}
                >
                </Toggle>


                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout