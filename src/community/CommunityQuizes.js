import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./Community.css"
export const CommunityQuizes =()=>{
const [allQuizes,setQuizes]=useState([])

useEffect(
    ()=>{
         fetch(`http://localhost:8088/quizes`)
        .then(response => response.json())
        .then((quizArray)=>{
            setQuizes(quizArray)
            
        })
        
    },
    []
)
    return <div>
        <h1>Community Quizes</h1>
        <section><button className="newQuizButton">Create New Quiz</button></section>
        {
            allQuizes.map(quiz=>{
                return<div key={quiz.id}>
                    <Link to={`/${quiz.id}/quiz`}>{quiz.name}</Link>
                    </div>
            })
        }
    </div>
}