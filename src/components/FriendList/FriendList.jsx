import PropTypes from 'prop-types';
import {
  Friends,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id}>
              <Status isOnline={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </Friends>
  );
};  

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
