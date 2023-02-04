import React from 'react'
import ListItem from './ListItem'

function ListGroup({transaction,deleteItem}) {
  return (
    <>
    <div class="get-info overflow-auto">
           <ul class="list-group">
            {
                transaction.map((item)=> 
                <ListItem transaction={item}  deleteItem={deleteItem}/>
                )
            }
           </ul>
            </div>
    </>
  )
}

export default ListGroup