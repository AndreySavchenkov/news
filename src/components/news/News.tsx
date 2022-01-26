import React, {FC, memo} from "react";
import {Item} from "./Item/Item";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {addPost} from "../../redux/post-reducer";
import {useDispatch} from "react-redux";


export const News: FC = memo(() => {

    const dispatch = useDispatch();

    return (
        <div>
            <h2>News</h2>

            <Formik
                initialValues={{ title: '', text: '' }}
                validate={values => {
                    const errors: any = {};
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const newDate = new Date() ;
                    let post = {
                        title: values.title,
                        text: values.text,
                        data: newDate.toString(),
                        id: '6'
                    }
                    dispatch(addPost(post))

                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="title" placeholder={'Заголовок...'}/>
                        <ErrorMessage name="title" component="div" />
                        <Field type="text" name="text" placeholder={'Текст...'}/>
                        <ErrorMessage name="text" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Добавить Пост
                        </button>
                    </Form>
                )}
            </Formik>

            <div>
                <Item
                    title={'Первая новость'}
                    text={'Текст первой новости'}
                    data={'Дата создания первой новости'}/>
                <Item
                    title={'Вторая новость'}
                    text={'Текст второй новости'}
                    data={'Дата создания второй новости'}/>
                <Item
                    title={'Третья новость'}
                    text={'Текст третьей новости'}
                    data={'Дата создания третьей новости'}/>
                <Item
                    title={'Четвертая новость'}
                    text={'Текст четвертой новости'}
                    data={'Дата создания четвертой новости'}/>
            </div>
        </div>
    )
})