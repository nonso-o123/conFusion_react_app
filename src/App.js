import React from 'react';
import Main from './components/MainComponent'
import './App.css'
import { BrowserRouter } from 'react-router-dom'



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  )
}
