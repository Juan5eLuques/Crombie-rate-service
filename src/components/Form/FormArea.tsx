import React from 'react'
import '../../styles/Form-camp.css'

type PropType = {
    title : string,
    placeholder: string,
    handlerOnChange : React.ChangeEventHandler<HTMLInputElement>
}

export const FormArea = ({title,placeholder , handlerOnChange} : PropType) => {
  return (
    <div className='camp-container'>
        <span>{title}</span>
        <input placeholder={placeholder} onChange={handlerOnChange}></input>
    </div>
  )
}
