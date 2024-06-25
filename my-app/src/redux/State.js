// import renderEntireTree from "../render";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'hi', likesCount: 11 },
                { id: 2, message: 'tooo', likesCount: 12 },
                { id: 3, message: 'one', likesCount: 1 },
            ],
            newPostText: 'hihihi'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsList: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sasha'" },
            ],
            friendsData: []
        }
    },
    _callSubscriber(state) {
        // console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessege() {
        let newMessege = {
            id: 10,
            message: this._state.dialogsPage.newMessegeText,
        };
        this._state.dialogsPage.messagesData.push(newMessege);
        this._state.dialogsPage.newMessegeText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessegeText(newText) {
        this._state.dialogsPage.newMessegeText = newText;
        this._callSubscriber(this._state);
    },



    subscribe(observer) { //observer-наблюдатель
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //action-объект { type:'ADD-POST',}
        switch (action.type) {
            case 'ADD-POST':
                this.addPost();
                break;
            case 'NEW-TEXT-POST':
                this.updateNewPostText(action.newText);
                break;
            case 'ADD-MESSEGE':
                this.addMessege();
                break;
            case 'NEW-TEXT-MESSEGE':
                this.updateNewMessegeText(action.newText);
                break;
            default:
                alert('oyyyyps');
        };

    }

};

const ADD_POST = 'ADD-POST';
const NEW_TEXT_POST = 'NEW-TEXT-POST';
const ADD_MMESSEGE = 'ADD-MESSEGE'
const NEW_TEXT_MESSEGE = 'NEW-TEXT-MESSEGE'

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }

// export const newTextPostActionCreator = (text) => {
//     return { type: NEW_TEXT_POST, newText: text }
// }

export const addPostActionCreator = () => ({ type: ADD_POST })

export const newTextPostActionCreator = (text) =>
    ({ type: NEW_TEXT_POST, newText: text })

export const addMessegeActionCreator = () => ({ type: ADD_MMESSEGE })

export const newTextMessegeActionCreator = (text) =>
    ({ type: NEW_TEXT_MESSEGE, newText: text })


export default store;
window.store = store;


// let state = {
//     profilePage: {
//         postData: [
//             { id: 1, message: 'hi', likesCount: 11 },
//             { id: 2, message: 'tooo', likesCount: 12 },
//             { id: 3, message: 'one', likesCount: 1 },
//         ],
//         newPostText: 'hihihi'
//     },
//     dialogsPage: {
//         dialogsData: [
//             { id: 1, name: "Dimych" },
//             { id: 2, name: "Andrey" },
//             { id: 3, name: "Sasha'" },
//             { id: 4, name: "Kolya'" },
//             { id: 5, name: "Nastya" },
//             { id: 6, name: "Dimych" },
//         ],
//         messagesData: [
//             { id: 1, message: 'hi' },
//             { id: 2, message: 'hi' },
//             { id: 3, message: 'hi' },
//             { id: 4, message: 'hi />' },
//             { id: 5, message: 'how are you' },
//             { id: 6, message: 'lol />' }
//         ]
//     },
//     sidebar: {
//         friendsList: [
//             { id: 1, name: "Dimych" },
//             { id: 2, name: "Andrey" },
//             { id: 3, name: "Sasha'" },
//         ],
//         friendsData: []
//     }
// };

// let renderEntireTree = (state) => {
//     // console.log('state changed');
// };

// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     state.profilePage.postData.push(newPost);
//     state.profilePage.newPostText = '';
//     renderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree(state);
// };

// window.state = state;

// export default state;

// export const subscribe = (observer) => { //observer-наблюдатель
//     renderEntireTree = observer;
// }


// let postData = [
//     { id: 1, message: 'hi', likesCount: 11 },
//     { id: 1, message: 'tooo', likesCount: 12 },
//     { id: 1, message: 'one', likesCount: 1 },
// ];

// let dialogsData = [
//     { id: 1, name: "Dimych" },
//     { id: 2, name: "Andrey" },
//     { id: 3, name: "Sasha'" },
//     { id: 4, name: "Kolya'" },
//     { id: 5, name: "Nastya" },
//     { id: 6, name: "Dimych" },
// ];

// let messagesData = [
//     { id: 1, message: 'hi' },
//     { id: 2, message: 'hi' },
//     { id: 3, message: 'hi' },
//     { id: 4, message: 'hi />' },
//     { id: 5, message: 'how are you' },
//     { id: 6, message: 'lol />' }
// ];