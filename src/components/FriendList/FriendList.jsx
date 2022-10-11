import { Friend } from "./Friend";
import friends from '../datas.json/friends.json'
import { FriendSListStyle } from "./FriendList.styled";
export const FriendList = ()=>{
    return <ul>
{friends.map(friend=>
<FriendSListStyle key={friend.id}>
<Friend 
isOnline={friend.isOnline}  
avatar={friend.avatar}
name={friend.name}    
/></FriendSListStyle> )}
  </ul>
}
