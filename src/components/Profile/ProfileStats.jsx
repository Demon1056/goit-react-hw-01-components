import PropTypes from 'prop-types';
import { UserStatsItem } from './ProfileStats.styled';
export const ProfileStats = ({item, children})=>{
    return<UserStatsItem>
    <span>{children}</span> <br/>
    <span>{item}</span>
    </UserStatsItem> 
}

ProfileStats.propTypes={
    item:PropTypes.number.isRequired
}