import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <FriendsItem>
            <Status isOnline={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </FriendsItem>
    )
}

FriendsItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
