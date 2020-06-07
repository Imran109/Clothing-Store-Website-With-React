import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
function SigninScreen(props){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const userSignin  = useSelector(state => state.userSignin);
    const {loading , userInfo , error} = userSignin;
    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
        return () =>{

        }; 
    } , [userInfo])
const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(signin(email , password));
}

    return <div className = "form">
        <form onSubmit = {submitHandler}>
            <ul className = "form-container">
                <li>
                    <h2>
                        Sign-In
                    </h2>
                </li>
                <li>
                    {loading && <div>Loading . . .</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor = "email">
                        Email
                    </label>
                    <input type = "email" name = "email" id = "email" onChange = {(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor = "password">
                        Password
                    </label>
                    <input type = "password" id = "password" name = "password" onChange = {(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className = "button primary">
                        Sign in
                    </button>
                </li>
                <li>
                    New to this site? 
                </li>
                <li>
                    <Link to = {redirect === "/" ? "signin" : "signin?redirect=" + redirect} className = "button secondary text-center">Create your free account here</Link>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;