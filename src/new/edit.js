import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Quiz.css"
import { useNavigate } from "react-router-dom"
export const EditQuiz=()=>{
    const navigate = useNavigate()
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quiz,setQuiz]=useState({
        id:1,
        name:"quiz"
    })
    useEffect(
        ()=>{
            fetch(`http://localhost:8088/quizes?id=${quizId}`)
            .then(response => response.json())
            .then((data)=>{
                const singleQuiz =data[0]
                setQuiz(singleQuiz)
            })
        },
        [quizId]
       )
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
    return <div>
       <h1>{quiz.name}</h1>
       {
        questions.map(question =>{
            return <div>
                <section>{question.question}-{question.answerOne}-{question.answerTwo}-{question.answerThree}-{question.answerFour}</section>
                </div>
        })
       }
       <button onClick={()=>navigate(`/${quiz.id}/add`)}>Add Question</button>
       
    </div>
}