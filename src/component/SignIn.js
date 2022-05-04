import React from 'react'
import '../index.css';


export default function SignIn(props) {
    return (
        <>
            <div className="wrapper">
                <h1>Hello Again!</h1>
                <p>Welcome back you've <br /> been missed!</p>
                <form>
                    <input type="text" placeholder="Enter username" />
                    <input type="password" placeholder="Password" />
                    <p className="recover">
                        <a href=" ">Recover Password</a>
                    </p>
                </form>
                <button><a href="./dashboard">Sign In</a></button>
                <p className="or">
                    ----- or continue with -----
                </p>
                <div className="icons">
                    <i className="fa fa-google"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="not-member">
                    Not a member? <a href="./SignUp">Sign Up Now</a>
                </div>
            </div>
        </>
    )
}