import React from 'react'

function ListItem({transaction,deleteItem}) {
  return (
    <li  class="list-group-item"><div class="text-center">
    <h5><span  class={transaction.amount>0 ? "float-start text-success" : "float-start text-danger"}>{transaction.amount}</span>{transaction.text}
    <button class="btn btn-danger btn-sm float-end rounded-0" onClick={()=>{deleteItem(transaction.id)}}>Delete</button></h5>
    </div></li>
  )
}

export default ListItem