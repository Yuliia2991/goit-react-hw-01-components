import { GlobalStyle } from './GlobalStyle'
import { Profile } from './Profile/Profile'
import user from './Profile/user.json';

export const App = () => {
  return (
    <>
      <Profile username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />         
      <GlobalStyle />
      </>
  );
};
