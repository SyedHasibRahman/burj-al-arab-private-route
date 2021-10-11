import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Register</h1>
                <form>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="ReEnter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account <Link to="register">Login</Link></p>
                <h4>---------------or -----------------</h4>
                <button>Google Sign In</button>
            </div>

        </div >
    );
};

export default Register;