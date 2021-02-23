import { Component } from "react";
import React from 'react';
import {useState} from 'react';

const Message=()=> {
    const[state1,setstate2]=useState(false);

const[Message,setMessage]=useState("subscribe the channel");





// const changeMessage=()=>{
    // 
    //    setMessage( <h1 style={{color:"yellow"}}>"thank you"</h1>);
        // setstate2(true);
//  
// }
// 
// 
// const db=()=>{
    // setstate2(false);
    // console.log("hi fKASDSHD DOUBE LCLICK")
// }

const changeMessage=()=>{
    if(state1===true){
       setstate2(false);
       setMessage("subscribe the channel");
    }
    else{
        setstate2(true);
        setMessage("unsubscribe the chanel")
    }
}


   
return (
<>

<div>
{/* {state1===true ? <h1>unsubscribe</h1>:<h2>Subscribe</h2>} */}

</div>

<p>{Message}</p>


{/* <div >{setstate2(true)}?<h1>juj</h1>:null */}
{/* // </div> */}



{/* <h1 style={{color:"blue"}}>{Message }</h1> */}

<button style={{color:"blue"  }} 
onClick={changeMessage} ><h1 style={{color:"pink"}}>
 {Message}
</h1></button>

</>
)
}

export default Message;
