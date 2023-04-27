import React, { useRef,useEffect, useState } from "react";
import Home from "./Home";
import "./App.css";

function App() {

  const name=useRef()
  const contactno=useRef()
  const email=useRef()
  const password=useRef()
  const[showHome,setShowHome]=useState(false)
  const[show,setShow]=useState(false)
  const localSignUp=localStorage.getItem("signUp")
  const localEmail=localStorage.getItem("email")
  const localName=localStorage.getItem("name")
  const localPassword=localStorage.getItem("password")

  useEffect(()=>{
  if(localSignUp){
        setShowHome(true)
      }
      if(localEmail){
        setShow(true)
      }
  }, [localSignUp,localEmail])

  const handleClick = () => {
    if ( name.current.value && email.current.value && password.current.value
    ) {
      localStorage.setItem("name", name.current.value)
      localStorage.setItem("contactno",contactno.current.value)
      localStorage.setItem("email", email.current.value)
      localStorage.setItem("password", password.current.value)
      localStorage.setItem("signUp", email.current.value)
      alert("Account created Successfully!!")
      window.location.reload()
    }
  }
const handleSignIn=()=>{
  if (email.current.value===localEmail&& password.current.value===localPassword){
localStorage.setItem("signUp",email.current.value)
window.location.reload()
  }else{
    alert("Please Enter valid Credential")
  }
}
  return (
    <div>
      {showHome?<Home/>:
      (show?
      <div className="container" >
        <h1>Hello {localName}</h1>
       
        <div className="for_input">
          <input placeholder="Email" type="text" ref={email} />
        </div>
        <div className="for_input">
          <input placeholder="Password" type="text" ref={password} />
        </div>
        <button onClick={handleSignIn} className='sign'>Sign In</button>
      </div>
      :
      <div className="container">
        <h1>Sign Up</h1>
      <div className="for_input">
        <input placeholder="Name" type="text" ref={name} />
      </div>
      <div className="for_input">
        <input placeholder="Contact No" type="text" ref={contactno} />
      </div>
      <div className="for_input">
        <input placeholder="Email" type="text" ref={email} />
      </div>
      <div className="for_input">
        <input placeholder="Password" type="text" ref={password} />
      </div>
      <button onClick={handleClick} className='sign'>Sign Up</button>
    </div>
      )
}
    </div>
  
  );
}
export default App;
