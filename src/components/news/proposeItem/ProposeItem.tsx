import React, {FC, memo} from "react";
import {useDispatch} from "react-redux";
import {approveProposePost, deleteProposePost} from "../../../redux/post-reducer";

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
        <div>
            <br/>
            <div>{title}</div>
            <div>{text}</div>
            <div>{data}</div>
            <button onClick={proposeHandler}>Одобрить</button>
            <button onClick={deleteHandler}>Удалить</button>
            <br/>
        </div>
    )
})