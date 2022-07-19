import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  padding: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

  :hover {
    background-color: #f8cbef;
  }
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 35px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 25%;
  height: auto;
  &:not(:last-child) {
    margin-right: 35px;
  }
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: #393a34;
`;
