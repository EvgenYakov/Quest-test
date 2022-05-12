import './App.css';
import React from "react";
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/Quiz-creator/Quiz-creator";
import Quizlist from "./containers/Quizlist/Quizlist";
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/quiz-creator" element={<QuizCreator />}/>
            <Route path="/quiz/:id" element={<Quiz/>}/>
            <Route path="/" element={<Quizlist/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
