import React from 'react'


function home() {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/3214377.jpg')",backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100vh"}}>
        <button onClick={logout} 
            style={{textAlign:"center",
                    justifyContent:"center",
                    margin:"5px",
                    borderRadius:"30px",
                    padding:"10px",
                    textDecoration:"bold"}} > 
            <img src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png' 
                style={{width:"15px",
                marginRight:"10px"}}
                />Back to SignIn screen </button>
    </div>
  )
} 

export default home;