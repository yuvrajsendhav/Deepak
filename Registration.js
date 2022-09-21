import React, {useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function RegistrationForm(){
  let [name, setName] = useState(null);
  let [mobNo, setMobNo] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [password2, setPassword2] = useState(null);
  let [add, setAdd] = useState(null);

  //error state
  let [nameErr, setNameErr] = useState(" ");
  let [mobNoErr, setMobNoErr] = useState(null);
  let [emailErr, setEmailErr] = useState(null);
  let [passErr, setPassErr] = useState(null);
  let [passErr2, setPassErr2] = useState(null);
  let [addErr, setAddErr] = useState(null);


  const handelInput=e=>{
//     let usernameRegex = /^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z])*[a-zA-Z]+$/;
//     let emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    
    let value=e.target.value;
    switch(e.target.id){

      case 'userName':
        setName(value)
        break;
    case "mobNo" :
        setMobNo(e.target.value);
        break;
    case "email" :
        setEmail(value);
        break;
    case "password" :
        setPassword(value);
        break;
    case "conformPassword" :
        setPassword2(value);
        break;
    case "city" :
        setAdd(value);
        break;
    default :
        break;
    }
  }
        // case 'userName':
//         if(usernameRegex.test(value)){
//               setName(value)
//               setNameErr(' ')
//               break;
//         }
//         else{
//           setNameErr('Invalid name')
//           break;
//         }
//         case "mobNo" :
//           if((isNaN(value))||(value.length!==10)){
//             setMobNoErr('Invalid Mob No')
//             setMobNo(e.target.value);
//             break;
//           }
//           else{
//             setMobNo(e.target.value);
//             setMobNoErr(' ')
//             break;
//           }
        
//       case "email" :
//         if(emailRegex.test(value)){
//           setEmail(value);
//           setEmailErr(' ')
//           break;
//         }
//         else{
//           setEmailErr('Invalid Email')
//           break;
//         }
//         case "password" :
//           if((value.length>=6)&&(value!==" ")&&(value.length<=10)){
//             setPassword(value);
//             setPassErr(' ')
//             break;
//           }
//           else{
//             setPassErr('Invalid Password')
//             break;
//           }
//           case "conformPassword" :
//           if(value===password){
//             setPassword2(value);
//             setPassErr2(' ')
//             break;
//           }
//           else{
//             setPassErr2('Invalid Password')
//             break;
//           }
//           case "city" :
//           if(usernameRegex.test(value)){
//             setCity(value);
//             setCityErr(' ')
//             break;
//           }
//           else{
//             setCityErr('Invalid Password')
//             break;
//           }
//       default :
//       break;
//     }
//   }
  
  const handleValue = ()=>{
    
      axios.post('http://localhost:5000/res/data',{name, mobNo, email, password, password2, add})
      .then(alert('you are successfuly registered'))
      .catch(err=>err.send('registration failed'));

  }
  

    return(
        <div  style={{backgroundColor:'#8fd774'}}>
          <div className="container">
             {/* <Link to="/LoginF" className=" text-light navbar-brand float-right" >Login</Link> */}
          </div>
            <form style={{ width:'100%', margin:'0% 40% '}}>
              <div className="form-group">
                <label htmlFor="userName" >Name</label>
                <input type="text" className="form-control col-sm-2 " id="userName" placeholder="Enter your name" onChange={handelInput} />
                <small id="nameErr" className="form-text text-muted">{nameErr}</small>
              </div>   
              <div className="form-group">
                <label htmlFor="mobNo">Mobile No</label>
                <input type="tel" className="form-control col-sm-2 " id="mobNo" placeholder="Enter Mobile No." onChange={handelInput} />
                <small id="mobNoErr" className="form-text text-muted">{mobNoErr}</small>
              </div>           
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control col-sm-2 " id="email" placeholder="Enter email" onChange={handelInput} />
                <small id="emailErr" className="form-text text-muted">{emailErr}</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control col-sm-2 " id="password" placeholder="Create Password" onChange={handelInput}/>
                <small id="passwordErr" className="form-text text-muted">{passErr}</small>
              </div>
              <div className="form-group">
                <label htmlFor="conformPassword">Conform Password</label>
                <input type="password" className="form-control col-sm-2 " id="conformPassword" placeholder="Enter Password again" onChange={handelInput}/>
                <small id="conformPasswordErr" className="form-text text-muted">{passErr2}</small>
              </div>
              <div className="form-group">
                <label htmlFor="add">Adress</label>
                <input type="text" className="form-control col-sm-2 " id="city" placeholder="Enter your city" onChange={handelInput}/>
                <small id="addErr" className="form-text text-muted">{addErr}</small>
              </div>
              <button type="submit" className="btn btn-primary " onClick={handleValue}>
                <Link to="/GetRegisData" className=" text-dark">Submit</Link>
              </button>
              <button type="reset" className="btn btn-secondary " style={{marginLeft:'1%'}}>Reset</button>
            {name} {mobNo} {email}  {password}  {password2} {add}
            </form>
        </div>
    );
}