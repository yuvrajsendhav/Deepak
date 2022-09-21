import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function GData(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/feed/getall')
        .then(res=>setData(res.data))
        .catch(err=>setData(err));
    }, []);

    if(!data) return null;
    
    return(
        <>
           <table className="table table-bordered">
            
                <tr>
                    <th>Id</th><th>Name</th><th>password</th><th>Mobile</th><th>Email</th><th>city</th><th className="text-info">Edit</th><th className="text-danger">Delete</th>
                </tr>
            
                {
                    data.map((result, i)=><tr key={i}><td>{result._id}</td><td>{result.name}</td><td>{result.password}</td><td>{result.mobNo}</td><td>{result.email}</td><td>{result.city}</td><td><Link to="/RagistrationEdit" state={result._id} className="text-info">Edit</Link></td><td><Link to="/RagistrationDelete" state={result._id} className="text-danger">Delete</Link></td></tr>)
                }
           </table>
        </>
    );
}