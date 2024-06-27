const ADD_MESSEGE = "ADD-MESSEGE"
const NEW_TEXT_MESSEGE = 'NEW-TEXT-MESSEGE'

const diaologsReduser = (state, action) => {
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