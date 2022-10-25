import crombieImage from '../assets/image-crombie.png'
import '../styles/header.css'


export const Header = () => {
  return (
    <div className='header'>
        <a href='#' style={{display:'flex', alignItems:'center', fontSize:'1rem', fontWeight:'400'}}>
          <img src={crombieImage}/>
          <div className='logo'> Crombie </div>
        </a>
    </div>
  )
}
