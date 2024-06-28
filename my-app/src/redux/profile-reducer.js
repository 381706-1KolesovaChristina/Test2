const ADD_POST = 'ADD-POST';
const NEW_TEXT_POST = 'NEW-TEXT-POST';

let initialState = {
    postData: [
        { id: 1, message: 'hi', likesCount: 11 },
        { id: 2, message: 'tooo', likesCount: 12 },
        { id: 3, message: 'one', likesCount: 1 },
    ],
    newPostText: 'hihihi'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) { //! вынесли из state чтобы для каждого блока был reducer
        case ADD_POST:  //! те теперь за каждый блок отвечает своя небольшая ф-я а не одна огромная
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            // alert('oyyyyps');
            return state;
    };
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const newTextPostActionCreator = (text) =>
    ({ type: NEW_TEXT_POST, newText: text })

export default profileReducer;