import { useState } from 'react'
import './styles/App.css'
import {Form} from './components/Form'
import crombieImage from './assets/image-crombie.png'

function App () {

  return (
    <div className="App">
      <div className='header'>
        <a href='#' style={{display:'flex', alignItems:'center', fontSize:'1rem', fontWeight:'400'}}>
          <img src={crombieImage}/>
          <div className='logo'> Crombie </div>
        </a>
      </div>
      <div className='title-section'>
        <div style={{position:'relative'}}>
          <h1> Rate our services </h1>
          <span>⇨ Your opinion matters to us</span>
        </div>
      </div>
      <div className='content'>
        <section className='form-section'>
          <Form/>
        </section>
      </div>
    </div>
  )
}

export default App
