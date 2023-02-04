import React from 'react'
import ListGroup from './ListGroup'
import Result from './Result'

function InfoSection({transaction,deleteItem}) {
  return (
   <>
   {/* start of info section*/}
   <div class="info-section col-lg-9 col-md-12 col-sm-12">
            <Result transaction={transaction}/>
            <ListGroup transaction={transaction} deleteItem={deleteItem}/>
        </div> 
        {/* end of info section*/}  
   </>
  )
}

export default InfoSection