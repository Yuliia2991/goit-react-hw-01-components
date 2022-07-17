import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  ProfileDescription,
  Avatar,
  Name,
  StatsList,
  Label,
  Quantity,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <ProfileDescription>
        <Avatar src={avatar} alt="Profile avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>
      <StatsList>
        <StatsItem>
          <Label>followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
