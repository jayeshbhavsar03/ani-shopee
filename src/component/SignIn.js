import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to=" ">Recover Password</Link>
                    </p>
                </form>
                <button><Link to="./dashboard">Sign In</Link></button>
                <p className="or">
                    ----- or continue with -----
                </p>
                <div className="icons">
                    <i className="fa fa-google"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="not-member">
                    Not a member? <Link to="./SignUp">Sign Up Now</Link>
                </div>
            </div>
        </>
    )
}