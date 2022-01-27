const ADD_POST = 'ADD_POST';
const PROPOSE_POST = 'PROPOSE_POST';
const APPROVE_PROPOSE_POST = 'APPROVE_PROPOSE_POST';
const DELETE_PROPOSE_POST = 'DELETE_PROPOSE_POST';

export type PostType = {
    title: string,
    text: string,
    data: string,
    id: string,
}

type StateType = {
    proposedPosts: PostType[]
    posts: PostType[]
}

const initialState: StateType = {
    proposedPosts: [],
    posts: [
        {
            title: 'Первый пост',
            text: 'Текст первого поста',
            data: 'Thu Jan 01 2022 09:52:53 GMT+0300 (Москва, стандартное время)',
            id: '1',
        },
        {
            title: 'Второй пост',
            text: 'Текст второго поста',
            data: 'Thu Jan 10 2022 09:52:53 GMT+0300 (Москва, стандартное время)',
            id: '2',
        },
        {
            title: 'Третий пост',
            text: 'Текст третьего поста',
            data: 'Thu Jan 15 2022 09:52:53 GMT+0300 (Москва, стандартное время)',
            id: '3',
        },
        {
            title: 'Четвертый пост',
            text: 'Текст четвертого поста',
            data: 'Thu Jan 26 2022 09:52:53 GMT+0300 (Москва, стандартное время)',
            id: '4',
        }
    ]
}

export type ActionTypes = ReturnType<typeof addPost>
    | ReturnType<typeof proposePost>
    | ReturnType<typeof approveProposePost>
    | ReturnType<typeof deleteProposePost>


export const PostReducer = (state: StateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case PROPOSE_POST:
            return {
                ...state,
                proposedPosts: [...state.proposedPosts, action.post]
            }
        case APPROVE_PROPOSE_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case DELETE_PROPOSE_POST:
            return {
                ...state,
                proposedPosts: [...state.proposedPosts.filter(p => p.id !== action.postId)]
            }
        default:
            return state
    }
}

export const addPost = (post: PostType) => {
    return {type: ADD_POST, post} as const
}
export const proposePost = (post: PostType) => {
    return {type: PROPOSE_POST, post} as const
}
export const approveProposePost = (post: PostType) => {
    return {type: APPROVE_PROPOSE_POST, post} as const
}
export const deleteProposePost = (postId: string) => {
    return {type: DELETE_PROPOSE_POST, postId} as const
}

