
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const [mode, setMode]= useState ('light');
  const [alert, setAlert]=useState (null);

  const showAlert =(message, type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout (()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#021c36';
      showAlert("Dark mode is enabled", "success");
      
    }

    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success");
      
    }
    
  }
  return (
    <>

<BrowserRouter>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
      <Routes>  
            <Route exact path="/about" element={<About mode={mode}/>}> </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-  Enter Text to Analyze" mode={mode}/>}/>
          
      </Routes>

    </BrowserRouter>
</>
  );
}



export default App;
