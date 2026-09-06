import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BasicIdentity from './Components/BasicIdentity'
import Data from './Components/Data'


function App() {
  return(
    <>
  <BasicIdentity />
  <Data />
  </>
  );
}

export default App
