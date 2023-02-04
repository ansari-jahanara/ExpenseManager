import React from 'react'
import Form from './Form'
import Header from './Header'

function FirstSection({saveItem}) {
    
  return (
    <>
    {/* start of first section*/}
    <section class="form-section col-lg-3 col-md-12 col-12">
               <Header/>
               <Form saveItem={saveItem}/>
            </section>
            {/* end of first section*/}</>
  )
}

export default FirstSection