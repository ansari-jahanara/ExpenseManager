import { useState } from "react";
import FirstSection from "./components/FirstSection";
import InfoSection from "./components/InfoSection";

function App() {
  const [transaction , setTransaction] = useState([]);

//save Transaction
const saveItem =(text,amount)=>{
  console.log(text,amount);
  const newItem={
    id : crypto.randomUUID(),
    text : text,
    amount : parseInt(amount)
  }
  setTransaction([...transaction,newItem])
 }

 //delete Transaction
 const deleteItem=(id)=>{
 setTransaction(transaction.filter((item)=> item.id!==id))
 }
  return (
      <>
      <div>
        {/* start of main section*/}
      <div class="container-fluid">
        <div class="row">
             <FirstSection saveItem={saveItem}/>
             <InfoSection transaction={transaction} deleteItem={deleteItem}/>
        </div>
      </div>
      {/* end of main section*/}
     </div>
      </> 
  );
}

export default App;
