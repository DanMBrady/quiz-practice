import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export const Create =()=>{
    const navigate = useNavigate();
const [quiz, setQuiz] = useState({
    name:"new"
})

const handleSave =(event) =>{
    event.preventDefault()

    fetch("http://localhost:8088/quizes", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(quiz)
    })
        .then(response=>response.json())
        .then((newQuiz)=>{
        navigate(`/${newQuiz.id}/add`)
        })
    
}
    return <div>
        <h1>New Quiz</h1>
<form>
    <fieldset>
        <div>
            <input
            required
            type="text"
            className="newName"
            placeholder="Quiz Name"
            onChange={
                (evt) =>{
                    const copy ={...quiz}
                    copy.name = evt.target.value
                    setQuiz(copy)
                }
            } />
        </div>
    </fieldset>
    <button onClick={(clickEvent)=>handleSave(clickEvent)}>Submit</button>
</form>

    </div>
}