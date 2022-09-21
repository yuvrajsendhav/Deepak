import axios from "axios";
import React, { useState} from "react";
import { useLocation, Link } from "react-router-dom";
export default function RegistrationEdit(){
    
        let data = useLocation();
        const [name, setName] = useState(null);
        const [post, setPost] = useState();
        const [email, setEmail] = useState(null);
        const [city, setCity] = useState(null);
        const [mobNO, setMobNo] = useState(null);
        React.useEffect(() => {
            axios.get(`http://127.0.0.1:5000/feed/get/${data.state}`)
            .then((response) => {
              setPost(response.data);
            });
          }, []);
     
    const handleValue = (e) => {
         axios.put(`http://127.0.0.1:5000/feed/update/${data.state}`, {
           name, mobNO, email, city
         })
         .then((res)=>{
            window.location.href='/GData'
         })
         .catch(err=>console.log(err));
    }

    if (!post) return null;
    return(
        <div  style={{backgroundColor:'#8fd774'}}>

        <form style={{ width:'100%', margin:'0% 40% '}}>
          <div className="form-group">
            <label htmlFor="_id" >Name</label>
            <input type="text" className="form-control col-sm-2 " placeholder="Enter your name"  onChange={e=>setName(e.target.value)}  />
            <small id="nameErr" className="form-text text-muted">Name Error</small>
          </div> 
          <div className="form-group">
                <label htmlFor="mobNo">Mobile No</label>
                <input type="tel" className="form-control col-sm-2 " id="mobNo" placeholder="Enter Mobile No." onChange={e=>setMobNo(e.target.value)} />
                <small id="mobNoErr" className="form-text text-muted">mobNo Error</small>
              </div>          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control col-sm-2 " id="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
            <small id="emailErr" className="form-text text-muted">Email Error</small>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control col-sm-2 " placeholder="Enter your city" onChange={e=>setCity(e.target.value)}/>
            <small id="citydErr" className="form-text text-muted">city Error</small>
          </div>
          <button type="submit" className="btn btn-primary " onClick={handleValue}><Link to='/GData' className='text-dark'>Update</Link></button>
          <button type="reset" className="btn btn-secondary " style={{marginLeft:'1%'}}>Reset</button>
        </form>
    </div>
    );
}