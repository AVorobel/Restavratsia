import React, {Component} from 'react';
import './css-styles/main-styles.css';
import './css-styles/dynamic-styles.css';
import {Link} from "react-router-dom";

class SignInCustomer extends Component {
    render() {
        return (
            <div id="div-input" className="input-form">
                <div className="input-text flex-center">
                    <p className="text-form text">login</p>
                    <input type="text" className="input-field" placeholder="input here customer login"/>
                </div>
                <div className="input-text flex-center">
                    <p className="text-form text">password</p>
                    <input type="password" className="input-field" placeholder="input here password"/>
                </div>
                <div id="login-form-btn" className="">
                    <Link to="/restore-password" id="btn-forgot" className="button-class login-form-btn">forgot your password?</Link>
                    <Link to="/" id="btn-login" className="button-class login-form-btn">sign in</Link>
                </div>
            </div>
        );
    }
}

export default SignInCustomer;