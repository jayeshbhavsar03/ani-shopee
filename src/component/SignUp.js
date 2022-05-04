import React from 'react'
// import SignIn from './component/SignIn';
import '../index.css';

export default function SignUp(props) {
    return (
        <>
            <div className="wrapper">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Enter Email" />
                    <input type="password" placeholder="Password" />
                    <p className="recover">
                        Already a member?<a href="./">Sign  In</a>
                    </p>
                </form>
                <button><a href="./dashboard">Sign Up</a></button>
                <p className="or">
                    ----- or continue with -----
                </p>
                <div className="icons">
                    <i className="fa fa-google"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-facebook"></i>
                </div>
            </div>
        </>
    )
}