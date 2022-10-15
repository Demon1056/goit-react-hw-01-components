import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'datas.json/user.json'
import stats from 'datas.json/data.json'
import friends from 'datas.json/friends.json'
import items from "datas.json/transactions.json"
import { AppStyled, Section } from "./App.styled";
export const App = () => {
  return (
    <AppStyled>
    <Section>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</Section>
<Section><Statistics data={stats}/></Section>
<Section><FriendList friends={friends}/></Section>
<Section><TransactionHistory transactions={items}/></Section>
</AppStyled>
    
  );
  
};
