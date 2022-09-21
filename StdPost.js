import React, { useState} from "react";
export default function StdPost(){
    const [rno, setRNo]=useState(null);
    const [name, setName]=useState(null);
    const [sub, setSub]=useState(null);
    const [fee, setFee]=useState(null);
    const saveData=()=>{
       
        fetch('http://localhost:3000/user', {
            method:'POST',
            body:JSON.stringify({rno, name, sub, fee}),
            headers:{
                'Content-Type':'application/json'
            },
        }).then((res)=>res.json())
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error));
    }
    return(
        <>
            <label for="RNo">Roll No. : </label>
            <input type='text'  id='RNo' onChange={e=>setRNo(e.target.value)} /> <br/><br/>
            <label for="name">Name : </label>
            <input type='text'  id='name' onChange={e=>setName(e.target.value)} /> <br/><br/>
            <label for="Sub">Subject : </label>
            <input type='text' id='Sub' onChange={e=>setSub(e.target.value)} /> <br/><br/>
            <label for="Fee">Fee : </label>
            <input type='text' id='Fee' onChange={e=>setFee(e.target.value)} /> <br/><br/>
            <button onClick={saveData}>Submit</button>
            
        </>
    );
}