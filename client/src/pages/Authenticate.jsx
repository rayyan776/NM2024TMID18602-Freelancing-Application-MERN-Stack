import React, { useState } from 'react'
import '../styles/authenticate.css'
import Login from '../components/Login'
import Register from '../components/Register'
import {useNavigate} from 'react-router-dom'

const Authenticate = () => {

  const [authType, setAuthType] = useState('login');

  const navigate = useNavigate();

  return (


    <div className="AuthenticatePage">

        <div className="auth-navbar">
        <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b0f4e4dc1e6f665c41ba5370f9c10ae60f8bab95301ddbe439c01514dbda111?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
        className="logo"
        alt="Company logo"
      />
          <p onClick={()=> navigate('/')} >Home</p>
        </div>

        {authType==='login' ?
        <>
            <Login setAuthType={setAuthType} />
        </>
        :
        <>
            <Register setAuthType={setAuthType} />
        </>
        }

    </div>
  )
}

export default Authenticate