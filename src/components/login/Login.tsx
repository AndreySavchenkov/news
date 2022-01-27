import React, {FC, memo, useState} from "react";
import {loginAdmin, loginSuccess, loginUser, logoutAdmin, logoutUser} from "../../redux/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {AppStateType} from "../../redux/store";
import style from "./login.module.scss";


const user = {login: 'user', password: 'user'}
const admin = {login: 'admin', password: 'admin'}


export const Login: FC = memo(() => {

    const dispatch = useDispatch();

    const isUser = useSelector((state: AppStateType) => state.login.isUser);
    const isAdmin = useSelector((state: AppStateType) => state.login.isAdmin);

    if(!isUser && !isAdmin) {
        dispatch(loginSuccess(false))
    }

    const [isLogin, setIsLogin] = useState(false)

    const toggleLogin = () => {setIsLogin(!isLogin)}


    return (
        <>
            <button className={style.buttonLogin} onClick={toggleLogin}>
                {isUser ? 'Юзер' : isAdmin ? 'Админ' : 'Логин'}
            </button>
            {isLogin ?
                <div className={style.formContainer}>
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
                            <Form className={style.form}>
                                <Field type="text" name="name" placeholder={'Имя...'} autocomplete="off"/>
                                <ErrorMessage name="name" component="div" />
                                <Field type="password" name="password" placeholder={'Пароль...'}/>
                                <ErrorMessage name="password" component="div" />
                                <button type="submit" disabled={isSubmitting}>
                                    Отправить
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                : ''}
        </>
    )
})