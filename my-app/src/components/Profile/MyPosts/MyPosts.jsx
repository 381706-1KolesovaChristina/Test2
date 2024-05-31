import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>AddPost</button>
            </div>
            <div className={s.posts}>
                <Post message='hi' likesCount='3' />
                <Post message='one' likesCount='5' />
            </div>
        </div>
    )
}

export default MyPosts;