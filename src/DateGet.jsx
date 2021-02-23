import React, { useState } from 'react';

const DateGet=()=>{
    const datee=new Date().toLocaleTimeString();
    const[d,setCount]=useState(datee);
   const Timee=()=>{
       const datee=new Date().toLocaleTimeString();
       setCount(datee);
    
   }
  
  
   
   
   
   
   
   
   return(<>
  
    <h1 style={{textAlign:'center'}} >The time is {datee}</h1>
    <div class="but">
    <button  class="butt" onClick={Timee}>Click</button>
  

    </div>
   
    </>
    )
}
export default DateGet;