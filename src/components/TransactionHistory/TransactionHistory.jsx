import { Transaction } from "./Transaction";
import transactions from "../datas.json/transactions.json"
import { Table, TableTitles, TrTable } from './TransactionHistory.styled';
export const TransactionHistory = ()=>{
    return <Table>
    <TableTitles>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
      </tr>
  </TableTitles>
<tbody>
{transactions.map(transaction=><TrTable key={transaction.id}>
<Transaction 
    type={transaction.type}
    amount={transaction.amount}
    currency={transaction.currency}
/>
</TrTable>)}
  </tbody>
  </Table>
}