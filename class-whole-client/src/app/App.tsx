import React from "react";
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "@/pages/SignIn";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Paths from "@/routes/Paths";
import ResetPassword from "@/pages/ResetPassword";
import SignUp from "@/pages/SignUp";
import Classes from "@/pages/Classes";

const App = () => (
    <GoogleOAuthProvider clientId='dasdas'>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={Paths.signIn} element={ <Login/> } />
                    <Route path={Paths.resetPassword} element={ <ResetPassword/> } />
                    <Route path={Paths.signUp} element={ <SignUp/> } />
                    <Route path={Paths.classes} element={ <Classes/> } />
                </Routes>
            </div>
        </BrowserRouter>
    </GoogleOAuthProvider>
  )

export default App
