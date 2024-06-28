const ADD_MESSEGE = "ADD-MESSEGE"
const NEW_TEXT_MESSEGE = 'NEW-TEXT-MESSEGE'

let initialState = {
    dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha'" },
        { id: 4, name: "Kolya'" },
        { id: 5, name: "Nastya" },
        { id: 6, name: "Dimych" },
    ],
    messagesData: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi' },
        { id: 3, message: 'hi' },
        { id: 4, message: 'hi />' },
        { id: 5, message: 'how are you' },
        { id: 6, message: 'lol />' }
    ],
    newMessegeText: 'hi!',
};

const diaologsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSEGE:
            let newMessege = {
                id: 10,
                message: state.newMessegeText,
            };
            state.messagesData.push(newMessege);
            state.newMessegeText = '';
            return state;
        case NEW_TEXT_MESSEGE:
            state.newMessegeText = action.newText;
            return state;
        default:
            // alert('oyyyyps');
            return state;
    };
};

export const addMessegeActionCreator = () => ({ type: ADD_MESSEGE })

export const newTextMessegeActionCreator = (text) =>
    ({ type: NEW_TEXT_MESSEGE, newText: text })

export default diaologsReduser;