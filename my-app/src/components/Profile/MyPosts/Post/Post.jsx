import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg'></img>
            <div className='message'>
                {props.message}
                <div className="like">
                    <span className="likeN">
                        {props.likesCount}
                    </span>
                    like
                </div>
            </div>

        </div>
    )
}

export default Post;