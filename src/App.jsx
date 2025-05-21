

import React, { useEffect, useState } from "react";
//pages folder bata 3ta pages import 
import { SignUp, Login, Homepage } from "./pages";
//navigation setup vai nai halyo
import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";

const App = () => {
  const [token, setToken] = useState(false)
  //token cha vani :user logged-in hudha khari, login info lagera session storage ma save garne
  //page reload ma lost na hos vanera
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

// check gane ko lagi session storage ma : yedi token cha vani token state lai update garcha.
  useEffect(() => {
if(sessionStorage.getItem('token')){
  let data = JSON.parse(sessionStorage.getItem('token'))
  setToken(data)
}
  },[])



  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp/>} />
{/*         settoken le token haru pass garya vai halyo */}
        <Route path={"/"} element={<Login setToken={setToken}/>} />  
        {token?<Route path={"/homepage"} element={<Homepage token={token}/>} />: ""}

      </Routes>

    </div>
  );
};

export default App;
