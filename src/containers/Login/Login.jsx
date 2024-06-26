import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";

import { login_request } from "../../API/api";
// import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
// import { InputWrapper, LoginWrapper } from "./Login.styled";
import './Login.css'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Password must have at least 5 characters')
        .required('Required'),
});

const Login = ({ setAuth }) => {
    // const userList = useSelector((state) => state.users);

    return (
        <div className="login_wrapper">
            <h2>Login</h2>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    console.log(values);
                    login_request(values, (foundUser) => {
                        console.log(foundUser);
                        localStorage.setItem('login', JSON.stringify(foundUser));
                        setAuth(foundUser);
                    })
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="login_input_wrapper">
                            <div>
                                <Field name="email" id="email" placeholder="Email" />
                                {errors.email && touched.email ? (
                                    <div className="input_error">*{errors.email}</div>
                                ) : null}
                            </div>

                            <div>
                                <Field name="password" type="password" placeholder="Password" />
                                {errors.password && touched.password ? (
                                    <div className="input_error">*{errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <Link to="/signup">Don't have account?</Link>

                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;