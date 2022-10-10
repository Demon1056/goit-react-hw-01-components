import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats';
import { ProfileCard, ProfileImage, ProfileName, UserText,ProfileUserList } from './Profile.styled';
export const Profile = ({avatar, username, tag, location, stats })=>
{ return <div>
<ProfileCard>
  <ProfileImage
    src={avatar}
    alt="User avatar"
  />
  <ProfileName>{username}</ProfileName>
  <UserText>
  <p>@{tag}</p>
  <p>{location}</p>
  </UserText>
</ProfileCard>
<ProfileUserList>
  <ProfileStats item={stats.followers}>
    followers
    </ProfileStats>
    <ProfileStats item={stats.views}>
    views
    </ProfileStats>
    <ProfileStats item={stats.likes}>
    likes
    </ProfileStats>
</ProfileUserList>
</div>}

Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  stats:PropTypes.object.isRequired,
}