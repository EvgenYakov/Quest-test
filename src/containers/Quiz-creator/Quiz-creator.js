import React from "react";
import CButton from "../../components/UI/Button/Button";
import './Quiz-creator.css'
import {commonPoint,validate,butValidate} from "../formFraim/commonPoint";
import Cinput from "../../components/UI/Cinput/Cinput";
import Cselect from "../../components/UI/Select/Cselect";

function generateOption(i){
    return commonPoint({
        label: `Вариант ${i}`,
        errorMessage:"Введите корректный вариант",
        id:i
    },{required : true})
}

function createFormControls(){
    return {
        quest: commonPoint({
            label: 'Вопрос',
            errorMessage:"Введите корректный вопрос"
        },{required : true})
        ,
        option1:generateOption(1),
        option2:generateOption(2),
        option3:generateOption(3),
        option4:generateOption(4)
    }
}

class QuizCreator extends React.Component {

    state = {
        selectValue:1,
        trueChange:true,
        quiz:[],
        isFormVal:true,
        formControls: createFormControls()
    }


    formHandler(e){
        e.preventDefault();
    }

    createQuizHandler(e){
        e.preventDefault()
        console.log(this.state.quiz)
    }

    addHandler(e){
        e.preventDefault()
        let quiz = this.state.quiz.concat();
        const index = quiz.length+1;
        const {quest,option1,option2,option3,option4} = this.state.formControls;
        const question = {
            question:quest.value,
            answer:this.state.selectValue,
            id:index,
            anss: [
                {text:option1.value, id: option1.id},
                {text:option2.value, id: option2.id},
                {text:option3.value, id: option3.id},
                {text:option4.value, id: option4.id}
            ]
        }
        quiz.push(question)
        this.setState({
            trueChange:true,
            quiz,
            isFormVal:true,
            formControls: createFormControls()})

    }

    onChangeHand(e,contName){
        const formControls = {...this.state.formControls};
        const control = {...formControls[contName]};
        control.value = e.target.value;
        control.touch = true;
        control.valid = validate(control.value,control.validation);
        formControls[contName]= control;
        this.setState({formControls, trueChange:butValidate(formControls)})

    }

    greateInHand(){
        return Object.keys(this.state.formControls).map((name,index)=>{
            let control = this.state.formControls[name];
            return (
            <React.Fragment
                key={index}>
                <Cinput
                    value={control.value}
                    label={control.label}
                    errorMessage = {control.errorMessage}
                    valid={control.valid}
                    touch={control.touch}
                    shouldVal={!!control.validation}
                    onChange={e=>this.onChangeHand(e,name)}
                />
                {index===0 ? <hr/> : null}
            </React.Fragment>
            )
        })
    }

    selectChange(e){
        this.setState({selectValue: +e.target.value})
    }

    render() {
        const select = <Cselect items={[
            {text:1,value:1},
            {text:2,value:2},
            {text:3,value:3},
            {text:4,value:4}]}
            onChange={e=>this.selectChange(e)}
            value={this.state.selectValue}
            label={"Выберите правильный ответ"}
        />
        return (
            <div className="Quiz-creator">
                <div>
                    <h1>Редактор тестов</h1>
                    <form onSubmit={this.formHandler}>
                        {this.greateInHand()}
                        {select}
                        <CButton type = "primary"
                                 onClick={(e)=>this.addHandler(e)}
                                 disabled={!this.state.trueChange}
                        >Добавить тест</CButton>
                        <CButton type = "success"
                                 onClick={(e)=>this.createQuizHandler(e)}
                                 disabled={this.state.quiz.length===0}
                        >Создать тест</CButton>
                    </form>
                </div>

            </div>

        )
    }
}

export default QuizCreator