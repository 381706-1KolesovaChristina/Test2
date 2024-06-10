let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'hi', likesCount: 11 },
            { id: 1, message: 'tooo', likesCount: 12 },
            { id: 1, message: 'one', likesCount: 1 },
        ]
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
        ]
    },
    sidebar: {
        friendsList: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sasha'" },
        ],
        friendsData: []
    }
}

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

export default state;