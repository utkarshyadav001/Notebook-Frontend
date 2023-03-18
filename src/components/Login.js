import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import '../style/login.css'




const Login = (props) => {

  const contexta = useContext(NoteContext);
  const {updateLoading} = contexta;
  
  const host = 'http://localhost:5000'

  const {displayAlert} = props;
  

  const [data, setData] = useState({email: "", password: ""});
  const onChange = (e)=>{
    setData({...data,   [e.target.name]:  e.target.value});
  }
  // console.log(data.email, data.password);   

  const onSubmit = async (e)=>{
    e.preventDefault();

    updateLoading();
    const {email, password} = data;    
    
    let response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });


    const getUserData = await response.json();
    // if user enter wrong pass or gmail then 
    if(getUserData.Success=== false){
    displayAlert(`Failed`, `${getUserData.error}`);
    console.log("i am runing ")
    updateLoading();
  }
  else{
    localStorage.setItem("authToken", getUserData.authToken);
    window.location.href = "/"
    console.log("i am runing ")
    updateLoading();
    }
  }
  
  useEffect(()=>{
    updateLoading();
    // eslint-disable-next-line
  }, []);

  
  return (
    <div id="loginContainer">
      <h2>Please login to use MynoteBook App </h2>
        <form id="loginForm" onSubmit={onSubmit}>

          <div className="formItem">
          <label htmlFor="email">Gmail : </label>
          <input type="email" name="email" id="email" onChange={onChange}  required />
          </div>

          <div className="formItem">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" onChange={onChange} required minLength={5} />
          </div>

          <div className="btn">
            <button type="submit" className="login_signup">Login</button>
            <Link to="/signup" className="login_signup">Create a new account</Link>
          </div>
        </form>
    </div>
  )
}

export default Login
