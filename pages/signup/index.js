import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'


const styleLogin = makeStyles(theme => ({
    loginPanel : {

    }
}))

const SignUpPanel = () => {
    const classLogin = styleLogin();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    });

    const inputChangeHandler = (event, key) => {
        // console.log(event);
        setState({
            ...state,
            [key]: event, 
        })

    }
    
    const userRegister = () => {
        fetch("http://localhost:3001/api/user/",{
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }).then(res => res.json()).then(res => {
            console.log(res)
        }).catch(err => console.log(err));
    }

        console.log(state);
    return (
        <div>
            <div className={classLogin.loginPanel}>
                <h2>Sign Up</h2>
            </div>

            <div className={classLogin.userName}>
                <input type="text" placeholder="Enter Username " onChange={(event)=> inputChangeHandler(event.target.value, "name")} />
            </div>
            <div className={classLogin.userName}>
                <input type="text" placeholder="Enter Email Id" onChange={(event)=> inputChangeHandler(event.target.value, "email")} />
            </div>
            <div className={classLogin.password}>
                <input type="password" placeholder="Enter Your Password" onChange={(event)=> inputChangeHandler(event.target.value, "password")} />
            </div>

            <div className={classLogin.loginBtn}>
                <button onClick={userRegister}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpPanel;
