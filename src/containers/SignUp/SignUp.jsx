import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";

import { signup_request } from "../../API/api";
// import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
// import { addUser } from "../../../redux/actions/actions";
// import { SignUpWrapper, InputWrapper } from "./SignUp.styled";
import "./SignUp.css"

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must have at least 3 characters')
        .required('Required'),
    email: Yup.string()
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Password must have at least 5 characters')
        .required('Required'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


const SignUp = ({ setAuth }) => {
    // const dispatch = useDispatch();
    // const userList = useSelector((state) => state.users);

    return (
        <div className="signup_wrapper">
            <h2>Sign Up</h2>
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={(values) => {
                    // if (userList.find((a) => a.username === values.username)) {
                    //     alert("This username is already using");
                    //     return;
                    // }
                    // if (userList.find((a) => a.email === values.email)) {
                    //     alert("This email is already using");
                    //     return;
                    // }
                    // dispatch(addUser(values));
                    console.log(values);
                    signup_request(values, (user) => {
                        console.log(user);
                        localStorage.setItem('login', JSON.stringify(user));
                        setAuth(user);
                    })
                    // localStorage.setItem("login", JSON.stringify({
                    //     username: values.username,
                    //     email: values.email,
                    //     password: values.password,
                    // }));
                    // setAuth(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="input_wrapper">
                            <div>
                                <Field name="username" id="username" placeholder="Username" />
                                {errors.username && touched.username ? (
                                    <div className="input_error">*{errors.username}</div>
                                ) : null}
                            </div>

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

                            <div>
                                <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className="input_error">*{errors.confirmPassword}</div>
                                ) : null}
                            </div>
                        </div>

                        <Link to="/login">Already have account?</Link>

                        <Button type="primary" htmlType="submit">Sign Up</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp;