import './styles/App.css'
import {Form} from './components/Form/Form'
import { Header } from './components/Header'
import { Link, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { StepOne } from './pages/StepOne'
import { StepTwo } from './pages/StepTwo'

function App () {

  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/step-one' element={<StepOne/>}/>
      <Route path='/step-two' element={<StepTwo/>}/>
     </Routes>
    </div>
  )
}

export default App
