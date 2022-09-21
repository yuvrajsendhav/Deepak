import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";

export default function Stdput(){
    // const data = useLocation();
    // console.log(data.state);
    const [rno, setRNo]=useState(null);
    const [name, setName]=useState(null);
    const [sub, setSub]=useState(null);
    const [fee, setFee]=useState(null);
    const [id, setId]=useState(null)
    const [post, setPost] = useState([]);
   
        // useEffect(() => {
        //     axios.get(`http://localhost:3000/user/${id}`).then((response) => {
        //       setPost(response.data);
        //     });
        //   }, []);

        //   const handelInput =(e)=>{
        //     switch (e.target.id) {
        //       case "id":
        //         setId(e.target.value)
        //         break;
        //         case "rno":
        //           setRNo(e.target.value)
        //           break;
        //         case "name":
        //           setName(e.target.value)
        //           break;
        //         case "sub":
        //           setSub(e.target.value)
        //           break;
        //         case "fee":
        //           setFee(e.target.value)
        //           break;
        //         default:
        //           break;
        //     }   
        // }
        const changeSubmit = (e)=>{
            let putdata={rno, name, sub, fee}
            axios
    .put(`http://localhost:3000/user/${id}`, {
    //   rno: rno,
    //   name: name,
    //   sub:sub,
    //   fee:fee
    putdata
    })
    .then((response) => {
      console.log(response.data);
      // window.location.href="/";
    })
        


        
    //     fetch(`http://localhost:3300/user/${id}`,{
    //     method:'PUT',
    //     body:JSON.stringify({rno, name, sub, fee, id}),
    //     headers:{
    //         'Content-Type':'application/json; charset=UTF-8'
    //     },
    //     }).then(res=>res.json())
    //     .then(result=>console.log(result))
    //     .catch((err)=>console.log(err));
     }
     if (!post) return null
    return(
        <div>
        <form >
            Id : <input type="text"  id='id' onChange={e=>setId(e.target.value)}       />   
            <br /> 
            <label for="RNo">Roll No. : </label>
            <input type='text'  id='rno' onChange={e=>setRNo(e.target.value)} /> <br/><br/>
            <label for="name">Name : </label>
            <input type='text'  id='name' onChange={e=>setName(e.target.value)} /> <br/><br/>
            <label for="Sub">Subject : </label>
            <input type='text' id='sub' onChange={e=>setSub(e.target.value)} /> <br/><br/>
            <label for="Fee">Fee : </label>
            <input type='text' id='fee' onChange={e=>setFee(e.target.value)} /> <br/><br/>
             <button  onSubmit={changeSubmit}>Edit</button>
            
            </form>
            <p> {rno} {name}, {sub}, {fee} {id}</p>
            </div>
    );
}