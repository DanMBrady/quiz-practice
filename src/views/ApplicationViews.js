import { Outlet, Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { CommunityQuizes } from "../community/CommunityQuizes";
import { NewQuiz } from "../new/NewQuiz"
import { QuizResults } from "../new/QuizResults";
export const ApplicationViews = () => {
    const navigate=useNavigate();
	return (
		 <Routes>
            <Route path="/" element={
                <>
                <h1>Lets Get The Quizes On</h1>
                <button onClick={()=>navigate("community")}>Start</button>
                  <Outlet />
              </>
            }>

            </Route>
                <Route path="community" element={<CommunityQuizes/>} />
                <Route path=":quizId/quiz" element={ <NewQuiz/>} />
                <Route path=":quizId/quiz/:total/:score" element={ <QuizResults/>} />
                


                
        </Routes>
    )
}