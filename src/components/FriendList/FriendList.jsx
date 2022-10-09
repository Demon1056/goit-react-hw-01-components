import { Friend } from "./Friend";
import friends from '../datas.json/friends.json'
export const FriendList = ()=>{
    return <ul class="friend-list">
{friends.map(friend=>
<li key={friend.id}>
<Friend 
isOnline={friend.isOnline}  
avatar={friend.avatar}
name={friend.name}    
/></li> )}
  </ul>
}
