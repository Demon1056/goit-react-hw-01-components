import PropTypes from 'prop-types'
export const Friend = ({name, avatar, isOnline})=>{
    return<>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </>
}
Friend.propTypes={
isOnline:PropTypes.bool.isRequired,
avatar:PropTypes.string.isRequired,
name:PropTypes.string.isRequired,
}