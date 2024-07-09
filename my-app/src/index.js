import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/State'
// import { addPost } from './redux/State';
// // import renderEntireTree from './render';
// import { updateNewPostText } from './redux/State';
import store from './redux/redux-store'


// addPost('ghjkl;hjkl');
// let renderEntireTree = () => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById('root')); //! вынесено из функции 
let renderEntireTree = (state) => {
    debugger;
    root.render(
        <React.StrictMode>
            <App state={state}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState(); //т.к. значение state не передается при обновлении store redux, 
    //то нужно самим получить обновленное значение
    renderEntireTree(state);

});

// renderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
