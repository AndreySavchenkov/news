import React, {ChangeEvent, FC, memo, useState} from "react";
import {loginAdmin, loginSuccess, loginUser, logoutAdmin, logoutUser} from "../../redux/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";


const user = {login: 'user', password: 'user'}
const admin = {login: 'admin', password: 'admin'}


export const Login: FC = memo(() => {

    const isLoginSuccess = useSelector(state => state);

    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(false)

    const toggleLogin = () => {setIsLogin(!isLogin)}


    return (
        <div>
            <button onClick={toggleLogin}>login</button>
            {isLogin ?
                <div>
                    <Formik
                        initialValues={{ name: '', password: '' }}
                        validate={values => {
                            const errors: any = {};
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setIsLogin(false)
                            dispatch(logoutAdmin())
                            dispatch(logoutUser())
                            if(values.name === user.login && values.password === user.password) {
                                dispatch(loginUser())
                                dispatch(loginSuccess(true))
                            }
                            if(values.name === admin.login && values.password === admin.password) {
                                dispatch(loginAdmin())
                                dispatch(loginSuccess(true))
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" name="name" placeholder={'Имя...'}/>
                                <ErrorMessage name="name" component="div" />
                                <Field type="password" name="password" placeholder={'Пароль...'}/>
                                <ErrorMessage name="password" component="div" />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                : ''}
        </div>
    )
})