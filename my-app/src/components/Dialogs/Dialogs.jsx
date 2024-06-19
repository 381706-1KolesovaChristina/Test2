import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = props.state.messagesData.map(message => <Message message={message.message} id={message.id} />);
    let newMessege = React.createRef();
    let addMessege = () => {
        let text = newMessege.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.massages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessege}></textarea>
                <button onClick={addMessege}>Sent</button>
            </div>
        </div>
    )
}

export default Dialogs;