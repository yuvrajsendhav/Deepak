import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function LoginF(){
  let [name, setName] = useState(null);
  let [password, setPassword] = useState(null);
  let [user, setUser] = useState(null);

  const loginAs = (e)=>{
    switch (e.target.id){
      case 'user' :
        setUser(e.target.value);
        break;
      case 'admin' :
        setUser(e.target.value);
        break;
      case ' ' :
        setUser('');
        break;
      default:
        break;
    }
  }
  
  const Login1 = ()=>{
    axios.post('http://localhost:5000/signin',{name, password})
    .then((res)=>{
           console.log(res.data.message)
              if(res.data.message==="1"){
                window.location=user;
              }
              else{
                window.location='/LoginF'
              }
    })
    .catch(err=>console.log(err));

}

    return(
        <div style={{backgroundColor:'#8fd774'}}>
            
            <form action='/RagistrationForm' onSubmit={Login1} style={{ width:'100%', margin:'15% 40% '}}>  
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="user" id="user" value="/FeedBF" onChange={loginAs} />
                <label className="form-check-label" htmlFor="user">User</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="user" id="admin" value="/FeedBGet" onChange={loginAs} />
                <label className="form-check-label" htmlFor="adminn">Admin</label>
              </div>   
              <br/><br/>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control col-sm-2 " id="name" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control col-sm-2 " id="password" placeholder="Create Password" onChange={e=>setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-success " style={{marginLeft:'2%',borderRadius:'25%'}} >Login</button>
              <button type="reset" className="btn btn-secondary "   style={{marginLeft:'2%', borderRadius:'25%'}}><Link to="/RagistrationForm" className=" text-light">SignUp</Link></button>
            </form>
        </div>
    );
}