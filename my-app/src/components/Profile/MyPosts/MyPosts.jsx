import { addPostActionCreator, newTextPostActionCreator } from '../../../redux/State'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

// let postData = [
//     { id: 1, message: 'hi', likesCount: 11 },
//     { id: 1, message: 'tooo', likesCount: 12 },
//     { id: 1, message: 'one', likesCount: 1 },
// ];

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }

// let newTextPostActionCreator=(text)=>{
//     return{ type: 'NEW-TEXT-POST', newText: text }
// }

const MyPosts = (props) => {
    let postsElement = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost();
        props.dispatch(addPostActionCreator());
        // props.updateNewPostText('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value; //current -ссылаемся на нативный html элемент
        // props.updateNewPostText(text);
        // props.dispatch({ type: 'NEW-TEXT-POST', newText: text })
        props.dispatch(newTextPostActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}//имя по которому ссылаемся на этот элемент
                    value={props.newPostText} />
                <button onClick={addPost}>AddPost</button>
            </div>
            <div className={s.posts}>
                {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message='one' likesCount='5' /> */}
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;