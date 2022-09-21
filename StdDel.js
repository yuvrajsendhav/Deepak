import { useState } from "react"

export default function StdDel(){
    const [id, setId]=useState(null)
    function Deldata(){
        fetch(`http://localhost:3300/user/${id}`, {
            method:'DELETE',
        }).then(res=>res.json())
        .then((result)=>console.log(id))
        .catch((err)=>console.log(err))
    }
    return(
          <>
          <label for="Sub">Enter Id : </label>
          <input type='text' id='Sub'  onChange={e=>setId(e.target.value)} /> <br/><br/>
            
          <button onClick={Deldata} >Delete</button>
          </>
    )
}