import { GlobalStyle } from './GlobalStyle'
import { Profile } from './Profile/Profile'
import user from './Profile/user.json';

export const App = () => {
  return (
    <div>
         <Profile 
         user={user}
        >        
        </Profile>
      <GlobalStyle />
      </div>
  );
};
