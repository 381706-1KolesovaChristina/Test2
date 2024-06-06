import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sasha'" },
    { id: 4, name: "Kolya'" },
    { id: 5, name: "Nastya" },
    { id: 6, name: "Dimych" },
];

let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messegesData = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'hi' },
    { id: 3, message: 'hi' },
    { id: 4, message: 'hi />' },
    { id: 5, message: 'how are you' },
    { id: 6, message: 'lol />' }
];

let messegesElement = messegesData.map(messege => <Massage message={messege.message} id={messege.id} />);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
                {/* <DialogItem name='Dimych' id='1' />
                <DialogItem name='Andrey' id='2' />
                <DialogItem name='Sasha' id='3' />
                <DialogItem name='Kolya' id='4' />
                <DialogItem name='Nastya' id='5' />
                <DialogItem name='Dimych' id='6' /> */}
            </div>
            <div className={s.massages}>
                {/* <Massage message='hi' />
                <Massage message='how are you' />
                <Massage message='lol' /> */}
                {messegesElement}
            </div>
        </div>
    )
}

export default Dialogs;