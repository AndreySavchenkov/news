import React, {ChangeEvent, FC, memo, useState} from "react";
import {Item} from "./Item/Item";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {proposePost} from "../../redux/post-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import { v1 as uuidv1 } from 'uuid';
import {ProposeItem} from "./proposeItem/ProposeItem";


export const News: FC = memo(() => {

    const posts = useSelector((state: AppStateType) => state.post.posts)
    const proposedPosts = useSelector((state: AppStateType) => state.post.proposedPosts)
    const isLoginSuccess = useSelector((state: AppStateType) => state.login.isLoginSuccess)
    const isAdmin = useSelector((state: AppStateType) => state.login.isAdmin)
    const isUser = useSelector((state: AppStateType) => state.login.isUser)

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value = '';
        setSearchValue('')
    }

    return (
        <div>

            <input type="text" placeholder={'Найти пост...'} onChange={changeHandler} onBlur={onBlurHandler}/>

            {isUser ?
                <Formik
                    initialValues={{title: '', text: ''}}
                    validate={values => {
                        const errors: any = {};
                    }}
                    onSubmit={(values,{resetForm}) => {
                        const newDate = new Date();
                        let post = {
                            title: values.title,
                            text: values.text,
                            data: newDate.toString(),
                            //@ts-ignore
                            id: uuidv1(),
                        }
                        dispatch(proposePost(post))
                        resetForm();
                    }}
                >
                    {() => (
                        <Form>
                            <Field type="text" name="title" placeholder={'Заголовок...'}/>
                            <ErrorMessage name="title" component="div"/>
                            <Field type="text" name="text" placeholder={'Текст...'}/>
                            <ErrorMessage name="text" component="div"/>
                            <button type="submit" >
                                Предложить Пост
                            </button>
                        </Form>
                    )}
                </Formik>
                : ''}

            { isAdmin ? <h2>предложенные посты</h2> : null}

            { isAdmin ? proposedPosts.map(p => <ProposeItem key={p.id} title={p.title} text={p.text} data={p.data} id={p.id}/>): null}

            <h2>посты</h2>

            {/*{posts.map(p => <Item key={p.id} title={p.title} text={p.text} data={p.data}/>)}*/}



            {posts ? posts.filter((val) => {
                if (searchValue === '') {
                    return val
                } else if (val.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return val
                }
            }).map(p => <Item key={p.id} title={p.title} text={p.text} data={p.data}/>) : ''}




        </div>
    )
})