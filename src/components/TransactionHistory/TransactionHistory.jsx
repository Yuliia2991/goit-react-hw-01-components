import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <thead>
        <TableHeaderRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeaderRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
