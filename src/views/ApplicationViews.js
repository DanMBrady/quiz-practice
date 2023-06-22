import { Outlet, Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { NewQuiz } from "../new/NewQuiz"
export const ApplicationViews = () => {
    const navigate=useNavigate();
	return (
		 <Routes>
            <Route path="/" element={
                <>
                <h1>Lets Get The Quizes On</h1>
                <button onClick={()=>navigate("quiz")}>Start</button>
                  <Outlet />
              </>
            }>

            </Route>
                <Route path="quiz" element={ <NewQuiz/>} />
                


                
        </Routes>
    )
}