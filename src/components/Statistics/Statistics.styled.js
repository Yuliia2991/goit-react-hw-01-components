import styled from 'styled-components';

export const StatContainer = styled.section`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
  color: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding: 15px;
  color: #b6c7d2;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${p => p.color};
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
`;
