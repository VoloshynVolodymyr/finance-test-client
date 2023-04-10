import "./App.css";
import { startConnection } from "./helpers/getInfo";
import InformationBoard from "./components/InformationBoard/InformationBoard";
import TimeoutForm from './components/TimeoutForm/TimeoutForm';
import AddTickerForm from './components/AddTickerForm/AddTickerForm';
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import  imagebg from './images/bgimg2.jpg';
import Footer from './components/Footer/Footer';
import { useState } from 'react';


function App() {
  const [isVisibleTimeoutForm, setIsVisibleTimeoutForm] = useState(false);
  const [isVisibleTickerForm, setIsVisibleTickerForm] = useState(false);

  function setVisibleTimeoutForm(time) {
    setIsVisibleTimeoutForm(false);
    toast.success(`New interval added ${time/1000} sec`);
  }
  
  function setVisibleTickerForm () {
    setIsVisibleTickerForm(false);
  }

  startConnection();

  return (
    <>
    <img src={imagebg}  className="App-image" alt='header background'></img>
    <Toaster position="top-right" />
    <button className="App-btn" onClick={()=>setIsVisibleTimeoutForm(true)}>Set timeout</button>
    <button className={clsx("App-btn", "App-btn-move")} onClick={()=>setIsVisibleTickerForm(true)}>Add ticker</button>
      <div className="container">
      <AddTickerForm visible={isVisibleTickerForm} setVisible={setVisibleTickerForm}/>

        <InformationBoard/>
        <TimeoutForm visible={isVisibleTimeoutForm} setVisible={setVisibleTimeoutForm}/>

      </div>
      <ul className="floating-boxes">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <Footer/>
    </>
  );
}

export default App;
