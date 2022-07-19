import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 570px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 25px;
  border-spacing: 2px;
  color: #393a34;

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const TableHeaderRow = styled.tr`
  background-color: #f2a1e2;
  margin-right: 2px;
  text-transform: uppercase;
  font-size: 15px;
`;

export const TableHeaderCell = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8cbef;
  }
`;

export const TableData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;
