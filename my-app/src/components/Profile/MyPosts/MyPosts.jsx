import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

// let postData = [
//     { id: 1, message: 'hi', likesCount: 11 },
//     { id: 1, message: 'tooo', likesCount: 12 },
//     { id: 1, message: 'one', likesCount: 1 },
// ];



const MyPosts = (props) => {
    let postsElement = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        // props.updateNewPostText('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
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