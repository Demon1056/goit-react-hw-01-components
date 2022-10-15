import PropTypes from 'prop-types';
import { Transaction } from "./Transaction";
import { Table, TableTitles, TrTable } from './TransactionHistory.styled';
export const TransactionHistory = ({transactions})=>{
    return <Table>
    <TableTitles>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
      </tr>
  </TableTitles>
<tbody>
{(transactions).map((transaction)=><TrTable key={transaction.id}>
<Transaction 
    type={transaction.type}
    amount={transaction.amount}
    currency={transaction.currency}
/>
</TrTable>)}
  </tbody>
  </Table>
}

TransactionHistory.propTypes={
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired
}