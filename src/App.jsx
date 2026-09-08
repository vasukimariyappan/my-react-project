import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Data from './Components/Data'
import CustomerDataForm from './Components/CustomerDataForm'


function App() {
  return(
    <>
  <CustomerDataForm />
  <Data />
  </>
  );
}

export default App
