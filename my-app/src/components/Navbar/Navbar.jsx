import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import FriendsList from './Friends/FriendsList';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item/*`${s.item} ${s.active}`*/}>
                <NavLink to='/profile' /*activeClassName={s.active}*/ className={({ isActive }) => (isActive ? s.active : '')}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : '')}>Messeges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : '')}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : '')}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : '')}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className={({ isActive }) => (isActive ? s.active : '')}>Friends</NavLink>
            </div>
            <div className={s.friends}>
                <FriendsList state={props.state.friendsList} />
            </div>
        </nav >
    )
}

export default Navbar;
