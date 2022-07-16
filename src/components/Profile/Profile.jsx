import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, Avatar, Name, Tag, Location } from './Profile.styled';
 

export const Profile = ({user}) => {
    return (
        <ProfileContainer>
            <ProfileDescription>
                <Avatar src={user.avatar} alt="Profile avatar" />
                <Name>{user.username}</Name>
                <Tag>@{user.tag}</Tag>
                <Location>{user.location}</Location>
            </ProfileDescription>
        </ProfileContainer>
    )
}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.string,
}