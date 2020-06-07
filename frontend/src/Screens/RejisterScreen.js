import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
function RegisterScreen(props){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [repassword , setRePassword] = useState("");
    const [password , setPassword] = useState("");
    const userRegister  = useSelector(state => state.userRegister);
    const {loading , userInfo , error} = userRegister;
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
    dispatch(register(name , email , password));
}

    return <div className = "form">
        <form onSubmit = {submitHandler}>
            <ul className = "form-container">
                <li>
                    <h2>
                        Create Account
                    </h2>
                </li>
                <li>
                    {loading && <div>Loading . . .</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor = "name">
                        Name
                    </label>
                    <input type = "name" name = "name" id = "name" onChange = {(e) => setName(e.target.value)}></input>
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
                    <label htmlFor = "rePassword">
                        Retype Password
                    </label>
                    <input type = "password" id = "rePassword" name = "rePassword" onChange = {(e) => setRePassword(e.target.value)}></input>
                </li>
                <li>
                    <button type = "submit" className = "button primary">
                         Register
                    </button>
                </li>
                <li>
                    Already have an account?
                    <Link to = {redirect === "/" ? "register" : "register?redirect=" + redirect} className = "button secondary text-center">Create your free account here</Link>

                </li>
            </ul>
        </form>
    </div>
}
export default RegisterScreen;