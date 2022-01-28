import React, {FC, memo} from "react";
import {useDispatch} from "react-redux";
import {approveProposePost, deleteProposePost} from "../../../redux/post-reducer";
import style from "./proposeItem.module.scss";

export type ProposeItemType = {
    title: string,
    text: string,
    data: string,
    id: string,
}

export const ProposeItem: FC<ProposeItemType> = memo(({title, text, data, id}) => {

    const dispatch = useDispatch();

    const proposeHandler = () => {
        let post = {title, text, data, id}
        dispatch(approveProposePost(post))
        dispatch(deleteProposePost(id))
    }
    const deleteHandler = () => {
        dispatch(deleteProposePost(id))
    }

    return (
        <div className={style.itemContainer}>
            <div className={style.itemTitle}>{title}</div>
            <div className={style.itemText}>{text}</div>
            <div className={style.itemDate}>{data}</div>
            <div className={style.buttonContainer}>
                <button onClick={proposeHandler}>Одобрить</button>
                <button onClick={deleteHandler}>Удалить</button>
            </div>
        </div>
    )
})