import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login(email, password)
        // .then(() => {
        //     navigate("/private");
        // })
    };



    // this replaces the .then() above, much cleaner
    if (store.token && store.token !== "" && store.token !== undefined) {
        navigate("/private");
    }
    return (
        <>
            <div className="container">
                {(store.token && store.token !== "" && store.token !== undefined) ? "You are logged in with token"
                    :
                    <div align="center">
                        <h1>Hello! Login</h1>
                        <input
                            type="text"
                            value={email}
                            placeholder="enter email" onChange={e => setEmail(e.target.value)}></input>
                        <input
                            type="password"
                            value={password}
                            placeholder="enter password" onChange={e => setPassword(e.target.value)}></input>
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={() => navigate("/signup")}>Signup</button>
                        <button onClick={() => navigate("/forgot-password")}>Forgot Password</button>
                    </div>
                }
            </div>
        </>
    )
};


