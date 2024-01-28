import { useState } from 'react';
import './App.css';
import logo from "./asset/instagram.png"


function App() {

  const [login,setlogin] = useState(true)
  const switchAccount = ()=>{
    setlogin(!login)
  }
  return (
    <div className="container">
      <div className="user">
          <img src={logo}/>
          <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
          <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
          <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
          <input type="text" name="" id="" placeholder='Password' />
          <button>{login ? "Sign In" : "Sign up"}</button>
          <div className='footer'>
        {login ? "Don't have account?" : "Have account?"}
        <span onClick={switchAccount}>{login?"Sign up":"Log in"}</span>
      </div>
      </div>
      
    </div>
  );
}

export default App;
