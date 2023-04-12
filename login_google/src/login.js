import React, { useEffect, useState } from 'react';
import {auth,provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import Home from './home';

function SignIn(){
    const [value,setValue] = useState('');
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return(
    <div style={{backgroundImage:"url('https://wallpapercave.com/wp/wp2940007.png')",
                backgroundSize:"cover",
                backgroundPosition:"center",
                width:"100%",
                height:"100vh"}} >
        {value?<Home/>:
        <button onClick={handleClick}
        style={{textAlign:"center",
                    justifyContent:"center",
                    margin:"5px",
                    borderRadius:"30px",
                    padding:"10px",
                    textDecoration:"bold"}}
            >login with google</button>
        }
    </div>
);
}

export default SignIn;