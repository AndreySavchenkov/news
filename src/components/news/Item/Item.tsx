import React, {FC, memo} from "react";
import style from './item.module.scss';

export type ItemType = {
    title: string,
    text: string,
    data: string,
}

export const Item: FC<ItemType> = memo(({title, text, data}) => {

    return (
        <div className={style.itemContainer}>
            <div className={style.itemTitle}>{title}</div>
            <div className={style.itemText}>{text}</div>
            <div className={style.itemDate}>{data}</div>
        </div>
    )
})