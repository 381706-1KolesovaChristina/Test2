import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg' alt=''></img>
            </div>
            <div className={s.info}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;