import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from './views/ApplicationViews';

export const Quiz=()=> {
  return <Routes>

  <Route path="*" element={
   
      <>
        <div className="body">
       <ApplicationViews/>
        </div>
      </>
 

  } />
</Routes>
}


