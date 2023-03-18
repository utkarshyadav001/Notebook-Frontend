import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../style/login.css'




const Signup = (props) => {
  
  const host = 'http://localhost:5000'

  const {displayAlert} = props;

  const [data, setData] = useState({name: "", email: "", password: "", cPassword: ""});

  const onChange = (e)=>{
    setData({...data,   [e.target.name]:  e.target.value});
  }
  // console.log(data.email, data.password);   

  const onSubmit = async (e)=>{

    e.preventDefault();
    const {name, email, password , cPassword} = data;


    if(password === cPassword){
      
    let response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    });
    
    // console.log("adding a new note");
    const getUserData = await response.json();
    // if user enter wrong pass or gmail then 
    if(getUserData.Success=== false){
      displayAlert(`Failed`, `${getUserData.error}`);
      }
    else{
        localStorage.setItem("authToken", getUserData.authToken);
        window.location.href = "/"
    }

  }
  else{
      displayAlert(`Failed`, "Check your password");
  }
  }
    
  return (
    <div id="loginContainer">
      <h2>Create a new account</h2>
        <form id="loginForm" onSubmit={onSubmit}>

          <div className="formItem">
          <label htmlFor="name">Name : </label>
          <input type="name" name="name" id="name" onChange={onChange} minLength={5} required />
          </div>

          <div className="formItem">
          <label htmlFor="email">Gmail : </label>
          <input type="email" name="email" id="email" onChange={onChange}  required />
          </div>

          <div className="formItem">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" onChange={onChange} required minLength={5} />
          </div>

          <div className="formItem">
          <label htmlFor="cPassword">Confirm Password : </label>
          <input type="password" name="cPassword" id="cPassword" onChange={onChange} required minLength={5} />
          </div>

          <div className="btn">
            <button type="submit" className="login_signup">Signup</button>
            <Link to="/login" className="login_signup">Login</Link>
          </div>
        </form>
    </div>
  )
}

export default Signup
