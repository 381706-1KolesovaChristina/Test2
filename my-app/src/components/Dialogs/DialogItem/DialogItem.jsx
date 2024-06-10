import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.dialog /*+ ' ' + s.active*/}>
            <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg'></img>
            <NavLink to={'/dialogs/' + props.id} className={({ isActive }) => (isActive ? s.active : '')}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;