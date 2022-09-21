import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

export default function StdGet(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/user')
        .then((res)=>res.json())
        .then((json)=>{setData(json)})
        .catch((error)=>console.log(error));
    },[]);
    
    return(
        <div>
                    
            <table border={1}>
                <thead>
                   <tr><th>Id</th><th>RNo</th><th>Name</th><th>Sub</th><th>Fee</th><th>Edit</th></tr>
                </thead>
                <tbody>
                    {
                        data.map((data1, i)=> <tr key={i}><td>{data1.id}</td><td>{data1.rno}</td><td>{data1.name}</td><td>{data1.sub}</td><td>{data1.fee}</td><td><Link to="/PutAxios" state={data1.id}>Edit</Link> </td></tr>)
                    }
                </tbody>
            </table>
                
        </div>
    )
}