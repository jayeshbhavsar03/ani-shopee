import React from 'react'
import { Link } from 'react-router-dom'
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
                    <p className="recover not-member">
                        Already a member?<Link to="/"> Sign In</Link>
                    </p>
                </form>
                <button><Link to="./dashboard">Sign Up</Link></button>
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