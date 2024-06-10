import { NavLink } from 'react-router-dom'
import s from './FriendMini.module.css'

const FriendMini = (props) => {
    return (
        <div className={s.friendNav}>
            <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg'></img>
            <NavLink to={'/friends/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default FriendMini;