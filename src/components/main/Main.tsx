import React, {FC, memo} from "react";

export type MainType = {
    name?: string,
}

export const Main: FC<MainType> = memo(({name}) => {

    return(
        <div>
            <h1>main</h1>
            Привет, {name ? name : 'Гость'}!
        </div>
    )
})