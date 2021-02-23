import React,{useState} from 'react';





const Hookerss=()=>{
    
    const [count,setcount]=useState(0);

    const Incm=()=>{
        setcount(count + 1);
    }
    const Decrement=()=>{
        setcount(count -1);
    }



    return(
     
        <>
<h1 style={{textAlign:'center'}}>{count}</h1>
<button style={{marginLeft:"40%", padding:21}}  onClick={Incm}  >Clickme </button>


<button style={{marginLeft:"5%",padding:21}} onClick={Decrement}> Decrement</button>
</>
    )
}
export default Hookerss;