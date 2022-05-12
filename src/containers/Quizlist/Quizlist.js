import React from "react";
import {NavLink} from "react-router-dom";
import "./Quizlist.css"

class Quizlist extends React.Component {

    QuizListRender(){
        return [1,2,3].map((quiz,i) =>{
            return (
                <li className='qLi' key={i}>
                    <NavLink to="/quiz/:id">
                        тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }


    render() {
        return (
            <div className='QuizList'>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.QuizListRender()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Quizlist