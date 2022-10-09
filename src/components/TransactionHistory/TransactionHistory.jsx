import { Transaction } from "./Transaction";
import transactions from "../datas.json/transactions.json"
export const TransactionHistory = ()=>{
    return <table class="transaction-history"> 
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
      </tr>
  </thead>
<tbody>
{transactions.map(transaction=><tr key={transaction.id}>
<Transaction 
    type={transaction.type}
    amount={transaction.amount}
    currency={transaction.currency}
/>
</tr>)}
  </tbody>
</table>
}