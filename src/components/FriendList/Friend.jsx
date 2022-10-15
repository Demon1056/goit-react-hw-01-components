import PropTypes from 'prop-types'
import { FriendImage } from './Friend.styled'
export const Friend = ({name, avatar, isOnline})=>{
    return<>
    <span>{isOnline}</span> 
    <FriendImage  src={avatar} alt="User avatar" width="48" />
    <p>{name}</p> 
  </>
}
Friend.propTypes={
isOnline:PropTypes.bool.isRequired,
avatar:PropTypes.string.isRequired,
name:PropTypes.string.isRequired,
}