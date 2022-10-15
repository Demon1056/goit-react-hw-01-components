import PropTypes from 'prop-types'
import { Friend } from "./Friend";
import { FriendSListStyle } from "./FriendList.styled";
export const FriendList = ({friends})=>{
    return <ul>
{friends.map((friend)=><FriendSListStyle key={friend.id}>
<Friend
isOnline={friend.isOnline} 
avatar={friend.avatar}
name={friend.name}    
/></FriendSListStyle> )}
  </ul>
}

FriendList.propTypes={
  friends:PropTypes.arrayOf(PropTypes.object).isRequired
}
