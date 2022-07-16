import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding-top: 25px;
`;

export const ProfileDescription = styled.div`
  width: 250px;
  text-align: center;
  color: #b6c7d2;
  padding: 25px;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  /* background-color: #d7d7d7; */
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #e1e1f4;
  display: block;
  max-width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  color: #393a34;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.7;
`;

export const Tag = styled.p`
  font-size: 17px;
  line-height: 1.7;
`;
export const Location = styled.p`
  font-size: 17px;
  line-height: 1.7;
`;
