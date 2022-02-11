import "./App.css";
import Principal from "./Components/Principal";
import Home from "./Components/Home";
// import {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import CountryDescription from "./Components/CountryDescription";
import CreateActivity from './Components/CreateActivity'

function App() {
  // useEffect(()=>{

  // },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:country" element={<CountryDescription />} />
        <Route path="/createActivity" element={<CreateActivity />} />
        <Route path="*" element={<Principal />} />
      </Routes>
    </div>
  );
}

export default App;
