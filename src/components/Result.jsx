import React from 'react'
import { useState } from 'react'

function Result({transaction}) {
    const incomeAmount = transaction.filter((item)=>{
      return item.amount>0
    }).reduce((p,c)=>{
       return p + c .amount
    },0)
     
    const expenseAmount = transaction.filter((item)=>{
      return item.amount<0
    }).reduce((p,c)=>{
      return p + c.amount
    },0)

    const balanceAmount = transaction.reduce((p,c)=>{
         return p + c.amount
    },0)
  return (
    <>
    <section class="main-container container d-flex text-light text-center">
            <div class="cur-bal m-4"><h5>Current Balance</h5><p class="text-success fw-bold fs-5">{balanceAmount}</p></div>
            <div class="cur-inc m-4"><h5>Current Income</h5><p class="text-primary fw-bold fs-5">{incomeAmount}</p></div>
            <div class="cur-exp m-4"><h5>Current Expense</h5><p class="text-danger fw-bold fs-5">{expenseAmount}</p></div>
            </section> 
    </>
  )
}

export default Result