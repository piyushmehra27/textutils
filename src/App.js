import React, { useState } from 'react';
import './App.css';

import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
const [mode ,setMode]  =useState('light'); // wherether dm is enable or not
const [alert,setalert]= useState(null);

const showAlert =(message,type) =>{

                                          setalert({

                                           msg:message,
                                           type:type
                                                   })
setTimeout( () => {
setalert(null);
},3000);


                                  }


const toggleMode =() => {
if(mode=== 'light'){
setMode ('dark')
document.body.style.backgroundColor='#042743';
showAlert("Dark mode has been enabled","success");
document.title='TextUtils -Dark Mode';
{/*setInterval ( () =>{
  document.title='TextUtils is amazing app'
  },2000);
  setInterval ( () =>{
    document.title=' install TextUtils now'
    },1500);
*/}
}
         else {
                 setMode ('light')
                 document.body.style.backgroundColor='white';
                 showAlert("Light mode has been enabled","success");
                 document.title='TextUtils -Light Mode';
}
              }
                    
  return (
  <>
  
      <Navbar title ="Textutils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
      
          
         
          
    
         
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode ={mode} />
            
         
    
     </div>
    
      </>

  );
}

export default App;


