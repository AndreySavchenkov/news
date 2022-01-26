const ADD_POST = 'ADD_POST';

export type PostType = {
    title: string,
    text: string,
    data: string,
    id: string,
}

type StateType = {
    posts: PostType[]
}

const initialState: StateType = {
    posts: [
        {
            title: 'Первый пост',
            text: 'Текст первого поста',
            data: '22.12.2021',
            id: '1',
        },
        {
            title: 'Второй пост',
            text: 'Текст второго поста',
            data: '22.12.2021',
            id: '2',
        },
        {
            title: 'Третий пост',
            text: 'Текст третьего поста',
            data: '22.12.2021',
            id: '3',
        },
        {
            title: 'Четвертый пост',
            text: 'Текст четвертого поста',
            data: '22.12.2021',
            id: '4',
        }
    ]
}

export type ActionTypes = ReturnType<typeof addPost>

export const PostReducer = (state:StateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
    }
}

export const addPost = (post: PostType) => {
    return {type: ADD_POST, post} as const
}

