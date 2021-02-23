import React, { useState } from 'react';

const GetTime=()=>{
    const dat=new Date().toLocaleTimeString();
const [d,setCount]=useState(dat);

const Inx=()=>{
    const dat=new Date().toLocaleTimeString()
   setCount(dat);
}
setInterval(Inx,1000);
    return(

        <>
        <h1 style={{textAlign:'center'}}>{dat}</h1>
        <button style={{marginLeft:640}  }       onClick={Inx}> GET-Time</button>


        </>
    )
    }
export default GetTime;