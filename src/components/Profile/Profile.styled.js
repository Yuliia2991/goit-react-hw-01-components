import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;
  margin: 25px auto;
  color: #b6c7d2;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  font-size: 17px;
  line-height: 1.7;
  text-align: center;
  padding: 25px;
  background-color: #fff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background: #e1e1f4;
  display: block;
  max-width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  color: #393a34;
  font-size: 27px;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: #f5f8fa;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #b6c7d2;
  padding: 14px;
`;

export const Label = styled.span`
  font-size: 15px;
  line-height: 1.4;
`;

export const Quantity = styled.span`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  color: #393a34;
`;
