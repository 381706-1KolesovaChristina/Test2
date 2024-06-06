import s from './MyPosts.module.css'
import Post from './Post/Post'

let postData = [
    { id: 1, message: 'hi', likesCount: 11 },
    { id: 1, message: 'tooo', likesCount: 12 },
    { id: 1, message: 'one', likesCount: 1 },
];

let postsElement = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>AddPost</button>
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