import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "./datas.json/user.json"
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
<Section><Statistics/></Section>
<Section><FriendList/></Section>
<TransactionHistory/>
</AppStyled>
    
  );
  
};
