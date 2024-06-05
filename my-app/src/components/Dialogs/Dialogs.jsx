import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1' />

                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>Nastya</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how</div>
                <div className={s.message}></div>
            </div>
        </div>
    )
}

export default Dialogs;