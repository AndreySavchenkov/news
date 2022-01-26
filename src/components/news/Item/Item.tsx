import React, {FC, memo} from "react";

export type ItemType = {
    title: string,
    text: string,
    data: string,
}

export const Item: FC<ItemType> = memo(({title,text,data}) => {

    return (
        <div>
            <br/>
            <div>{title}</div>
            <div>{text}</div>
            <div>{data}</div>
            <br/>
        </div>
    )
})