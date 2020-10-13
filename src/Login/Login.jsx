import React from "react";
import "./Login.css";
import Button from '@material-ui/core/Button';
import {auth, provider} from "../firebase";

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(e => {
                alert(e.message)
            })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7wO8Li503_LR_HN5XtMTUlbrqU5oNYnWuTg&usqp=CAU"
                    alt="discord"
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login