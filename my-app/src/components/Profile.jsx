import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg' alt=''></img>
            </div>
            <div>
                ava+description
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>

            </div>
        </div>
    )
}

export default Profile;
