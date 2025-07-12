import React from 'react'
import styles from "./Register.module.css"
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Register() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const password = watch("password");

    const onSubmit = (data) => console.log(data)

    return (
            <div className={styles.container}>
                <h1>Register</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    {/* username */}
                    <div className={styles.form__field}>
                        <label htmlFor="username">Username</label>
                        <input type="text" {...register('username', {
                            required: 'Username is required',
                            pattern: {
                                value: /^\S+$/,
                                message: "No spaces allowed in username",
                            },
                        })} placeholder="Username" />
                        {errors.username && <p>* {errors.username.message} *</p>}
                    </div>

                    {/* email */}
                    <div className={styles.form__field}>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })} placeholder="Email" />
                        {errors.email && <p>* {errors.email.message} *</p>}
                    </div>

                    {/* password */}
                    <div className={styles.form__field}>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register('password', {
                            required: 'password is required',
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                                message: "Password Should have at least (1 UpperCase, 1 Number, 1 Special character)",
                            },
                            minLength: {
                                value: 6,
                                message: "Password Should have at least 6 characters",
                            }
                        })} placeholder="Password" />
                        {errors.password && <p>* {errors.password.message} *</p>}
                    </div>

                    {/* confirm password */}
                    <div className={styles.form__field}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })} placeholder="Confirm Password" />
                        {errors.confirmPassword && <p>* {errors.confirmPassword.message} *</p>}
                    </div>

                    {/* address */}
                    <div className={styles.form__field}>
                        <label htmlFor="Address">Address</label>
                        <input
                            placeholder="Address (optional)"
                            {...register("address")} />
                    </div>

                    <button className={styles.register} type="submit">Register</button>

                    <Link to="/login" className={styles.link}>Already have account? <span>Login</span></Link>
                </form>
            </div>
    )
}

export default Register