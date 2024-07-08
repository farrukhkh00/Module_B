import React, { useState } from 'react';
import Signup from './Signup/Signup';



const App = () => {
  let [In,setIn] = useState (false) 
  const checkIn = () => {
    In ? setIn(false) : setIn(true) 

  } 


  return (
    <div className="App">
      {
        In ?
        <Signup heading="Signup" display="block" submit="Signup" lastline="Already have a account" in="Login" click={checkIn} />
        :
        <Signup heading="Login" display="none" submit="login" lastline="Don't have an account" in="Signup" click={checkIn}/>

      }

    </div>
  );


}
export default App;
