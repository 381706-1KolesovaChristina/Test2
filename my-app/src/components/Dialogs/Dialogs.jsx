import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Kolya
                </div>
                <div className={s.dialog}>
                    Nastya
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