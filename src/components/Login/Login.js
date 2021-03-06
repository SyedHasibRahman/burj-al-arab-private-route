import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {

    return (

        <div className="login-form">

            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Buj Al Arab? <Link to="/register">Create a Coount</Link></p>
                <h4>---------------or -----------------</h4>
                <button>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;