import { useState,useEffect } from "react"
export const NewQuiz=()=>{
    const [questions,setQuestions] = useState([])

   
    useEffect(
        ()=>{
             fetch(`http://localhost:8088/questions`)
            .then(response => response.json())
            .then((questionArray)=>{
                setQuestions(questionArray)
                
            })
            
        },
        []
    )

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
    {
        questions.map(question=>{
            const classOne = `${question.id}-${question.answerOne}`
            const classTwo = `${question.id}-${question.answerTwo}`
            const classThree = `${question.id}-${question.answerThree}`
            const classFour = `${question.id}-${question.answerFour}`
            return<div>
                <section>{question.question}</section>
                <section><button id={classOne} onClick={()=>check(question,question.answerOne,classOne,classTwo,classThree,classFour)}>{question.answerOne}</button></section>
                <section><button id={classTwo}onClick={()=>check(question,question.answerTwo,classTwo,classOne,classThree,classFour)}>{question.answerTwo}</button></section>
                <section><button id={classThree}onClick={()=>check(question,question.answerThree,classThree,classOne,classTwo,classFour)}>{question.answerThree}</button></section>
                <section><button id={classFour}onClick={()=>check(question,question.answerFour,classFour,classOne,classTwo,classThree)}>{question.answerFour}</button></section>
                </div>
        })
    }
</div>
}