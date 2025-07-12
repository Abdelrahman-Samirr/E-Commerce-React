import React from 'react'
import styles from "./Login.module.css"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleLogin = (data) => {
    const userData = {email: data.email, isLoggedIn: true,};
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/cart");
    };


    return (
        <div className={styles.container}>

            <h1>Login</h1>

            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>

                {/* email */}
                <div className={styles.form__field}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email format",
                            },
                        })} placeholder="Email" />
                    {errors.email && <p>* {errors.email.message} *</p>}
                </div>

                {/* Password */}
                <div className={styles.form__field}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"
                        {...register("password", {
                            required: "Password is required",
                        })} placeholder="Password" />
                    {errors.password && <p>* {errors.password.message} *</p>}
                </div>

                <button type="submit" className={styles.login}>Login</button>

                <Link to="/register" className={styles.link}>Don't have account? <span>Register</span></Link>

            </form>
        </div>
    )
}

export default Login