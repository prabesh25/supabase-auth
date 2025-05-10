// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { supabase } from "./client";

// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   console.log(formData)

//   function handleChange(event) {
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//  async function handleSubmit(e){
//   e.preventDefault()
//     try{
//       const { data, error } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options:{
//           data:{
//             full_name: formData.fullName,
//           }
//         }
//       })
//       alert('Check your email for verification link.')

//     }catch(err){
//       alert(err)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Fullname"
//           name="fullName"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           name="email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChange}
//         />

//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { SignUp, Login, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";

const App = () => {
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

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
        <Route path={"/"} element={<Login setToken={setToken}/>} />
        {token?<Route path={"/homepage"} element={<Homepage token={token}/>} />: ""}

      </Routes>

      {/* <SignUp /> */}
    </div>
  );
};

export default App;
