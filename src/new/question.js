import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
export const Question =()=>{
    const navigate = useNavigate()
    const {quizId} = useParams()
    const [question,setQuestion]=useState({
        id: 1,
    question: "Question",
    answerOne: "Choice One",
    answerTwo: "Choice Two",
    answerThree: "Choice Three",
    answerFour: "Choice Four",
    correctAnswer: "Correct Answer",
    quizId: 1
    })

  const buttonEvent = (event) =>{
    event.preventDefault()

    const toSend ={
        question: question.question,
        answerOne: question.answerOne,
        answerTwo: question.answerTwo,
        answerThree: question.answerThree,
        answerFour: question.answerFour,
        correctAnswer: question.correctAnswer,
        quizId: quizId
    }
    fetch("http://localhost:8088/questions", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(toSend)
    })
    .then(res => res.json())
    .then(()=>{
        navigate(`/${quizId}/edit`)
    })
  }
    return <div>
        <h1>New Question</h1>

        <form>
            <fieldset>
                <div>
                <input
                required
                placeholder="Question"
                onChange={
                    (evt) =>{
                        const copy = {...question}
                        copy.question = evt.target.value
                        setQuestion(copy)
                    }
                } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                <input
                required
                placeholder="Choice"
                onChange={
                    (evt) =>{
                        const copy = {...question}
                        copy.answerOne = evt.target.value
                        setQuestion(copy)
                    }
                } />
                
                </div>
            </fieldset>
            <fieldset>
                <div>
                <input
                required
                placeholder="Choice"
                onChange={
                    (evt) =>{
                        const copy = {...question}
                        copy.answerTwo = evt.target.value
                        setQuestion(copy)
                    }
                } />
               
                </div>
            </fieldset>
            <fieldset>
                <div>
                <input
                required
                placeholder="Choice"
                onChange={
                    (evt) =>{
                        const copy = {...question}
                        copy.answerThree = evt.target.value
                        setQuestion(copy)
                    }
                } />
                
                </div>
            </fieldset>
            <fieldset>
                <div>
                <input
                required
                placeholder="Choice"
                onChange={
                    (evt) =>{
                        const copy = {...question}
                        copy.answerFour = evt.target.value
                        setQuestion(copy)
                    }
                } />
               
                </div>
            </fieldset>
        </form>
        <h2>Select Correct Answer</h2>
            <select onChange ={
                (event) =>{
                    const copy ={...question}
                    copy.correctAnswer = event.target.value
                    setQuestion(copy)
                }
            }
            >
                <option value={question.answerOne}>Select Answer</option>
                <option value={question.answerOne}>{question.answerOne}</option>
                <option value={question.answerTwo}>{question.answerTwo}</option>
                <option value={question.answerThree}>{question.answerThree}</option>
                <option value={question.answerFour}>{question.answerFour}</option>
            </select>
            <button onClick={(clickEvent) => buttonEvent(clickEvent)}>Save</button>
    </div>
}