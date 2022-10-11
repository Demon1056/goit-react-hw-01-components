import PropTypes from 'prop-types';
import { UserStatsItem, UserItemTitle, UserItemText } from './ProfileStats.styled';
export const ProfileStats = ({item, children})=>{
    return<UserStatsItem>
    <UserItemTitle>{children}</UserItemTitle> <br/>
    <UserItemText>{item}</UserItemText>
    </UserStatsItem> 
}

ProfileStats.propTypes={
    item:PropTypes.number.isRequired
}