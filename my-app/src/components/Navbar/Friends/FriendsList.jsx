import FriendMini from "./friendMini/FriendMini"
import s from "./FriendsList.module.css"

const FriendsList = (props) => {
    let friendsItems = props.state.map(friend => <FriendMini id={friend.id} name={friend.name} />)
    return (
        <div className={s.friendsList}>
            {friendsItems}
        </div>
    )
}

export default FriendsList;
