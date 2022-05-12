import React from 'react'
import AQuiz from '../../components/AQuiz/AQuiz'
import './Quiz.css'
import FinPage from "../../components/FinQuiz/FinPage";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.onAnswerClick = this.onAnswerClick.bind(this);
        this.finClick = this.finClick.bind(this);
        this.state = {
            activeQuest:0,
            isFin:false,
            results: {},
            ansState: null,
            quiz:[
                {
                    question:'Как долго пингвины могут плавать?',
                    answer:2,
                    id:1,
                    anss: [
                        {text:'Час ', id: 1},
                        {text:'2 часа ', id:2},
                        {text:'сутки', id:3},
                        {text:'Пока не увидят хищника', id:4}
                    ]
                },
                {
                    question:'Каких китов не бывает?',
                    answer:3,
                    id:2,
                    anss: [
                        {text:'Тигровых', id: 1},
                        {text:'Голубых', id: 2 },
                        {text:'Розовых', id: 3 },
                        {text:'Черных', id:4}
                    ]
                },
                {
                    question:'Чем питаются колибри?',
                    answer:1,
                    id:3,
                    anss: [
                        {text:'Нектаром и мелкими насекомыми ', id: 1},
                        {text:'Цветами и фруктами', id: 2 },
                        {text:'Мелкой рыбой', id: 3 },
                        {text:'Семенами трав', id:4}
                    ]
                },
                {
                    question:'Какой рыбы не существует',
                    answer:3,
                    id:4,
                    anss: [
                        {text:'Рыба-пила', id: 1},
                        {text:'Рыба-молот', id: 2 },
                        {text:'Рыба-плоскогубцы', id: 3 },
                        {text:'Рыба-игла', id:4}
                    ]
                }
            ]
        }
    }

    onAnswerClick(answerId){
        console.log("id --->" + answerId);
        if (this.state.ansState){
            const key = Object.keys(this.state.ansState)[0]
            if (this.state.ansState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuest];
        const results = this.state.results;
        if (answerId === question.answer) {

            if (!results[question.id]){
                results[question.id] = 'success';
            }

            this.setState({ansState: {[answerId]:'success'},results});
            const time = window.setTimeout(()=>{
            if(!this.checkEnd()){
                this.setState({activeQuest:this.state.activeQuest + 1,
                ansState:null})
            }else{
                this.setState({isFin:true});
                console.log('Finish');
            }
            window.clearTimeout(time);
        },1000)
        } else {
            results[question.id] = 'error';
            this.setState({ansState: {[answerId]:'error'}, results});
        }
        console.log(this.state.ansState)
    }

    checkEnd(){
        return this.state.quiz.length === this.state.activeQuest+1;
    }

    finClick(){
        this.setState({
            activeQuest:0,
            isFin:false,
            ansState: null,
            results:{}
        })
    }

    render() {
        const  anss =  this.state.quiz[this.state.activeQuest].anss;
        const question = this.state.quiz[this.state.activeQuest].question;
       return(
           <div className='Quiz'>
               <div className='QuizWrap'>
               {
                    this.state.isFin
                        ? <FinPage
                        quiz = {this.state.quiz}
                        results = {this.state.results}
                        finClick={this.finClick}/>
                        : <div>
                            <h1>Ответьте на вопросы</h1>
                            <AQuiz
                                ans = {anss}
                                question = {question}
                                onAnswerClick = {this.onAnswerClick}
                                activeQuest = {this.state.activeQuest + 1}
                                length={this.state.quiz.length}
                                ansState = {this.state.ansState}
                            />
                        </div>
               }
               </div>

           </div>
       )
    }
}

export default Quiz