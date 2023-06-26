import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Quiz.css"
import { useNavigate } from "react-router-dom"
export const NewQuiz=()=>{
    const [questions,setQuestions] = useState([])
    const {quizId} = useParams()
   const navigate = useNavigate()
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/questions?quizId=${quizId}`)
            .then(response => response.json())
            .then((questionArray)=>{
                setQuestions(questionArray)
                
            })
            
        },
        []
    )

    let quizTotal=0;
    let quizScore=0;
    const check = (question, answer, id,idTwo,idThree,idFour) => {
        if (question.correctAnswer === answer) {
          const button = document.getElementById(id);
          const buttonTwo=document.getElementById(idTwo)
          const buttonThree=document.getElementById(idThree)
          const buttonFour=document.getElementById(idFour)
            button.style.backgroundColor = "green";
            buttonTwo.disabled=true
            buttonThree.disabled=true
            buttonFour.disabled=true
            quizScore++
        } else {
        const button = document.getElementById(id);
        const buttonTwo=document.getElementById(idTwo)
        const buttonThree=document.getElementById(idThree)
        const buttonFour=document.getElementById(idFour)
        button.style.backgroundColor = "red";
        buttonTwo.disabled=true
        buttonThree.disabled=true
        buttonFour.disabled=true
        }
      };

return<div>
    <h1>Quiz Time</h1>
    {
        questions.map(question=>{
            const classOne = `${question.id}-${question.answerOne}`
            const classTwo = `${question.id}-${question.answerTwo}`
            const classThree = `${question.id}-${question.answerThree}`
            const classFour = `${question.id}-${question.answerFour}`
            quizTotal++;
            return<div key={question.id}>
                <section>{question.question}</section>
                <section><button id={classOne} onClick={()=>check(question,question.answerOne,classOne,classTwo,classThree,classFour)}>{question.answerOne}</button></section>
                <section><button id={classTwo}onClick={()=>check(question,question.answerTwo,classTwo,classOne,classThree,classFour)}>{question.answerTwo}</button></section>
                <section><button id={classThree}onClick={()=>check(question,question.answerThree,classThree,classOne,classTwo,classFour)}>{question.answerThree}</button></section>
                <section><button id={classFour}onClick={()=>check(question,question.answerFour,classFour,classOne,classTwo,classThree)}>{question.answerFour}</button></section>
                </div>
        })
        
    }
    <section><button onClick={()=>navigate(`/${quizId}/quiz/${quizTotal}/${quizScore}`)} className="continueButton">Continue</button></section>
    
</div>
}