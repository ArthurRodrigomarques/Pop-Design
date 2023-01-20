import React from 'react'
import './contact.css'
import{AiFillCloseCircle} from 'react-icons/ai'


const contact = ({onClose}) => {
  return (
    <div className='div-contact'>
        <h1>Contact Us</h1>
        <AiFillCloseCircle onClick={onClose} size={28} className='close'/>
        <p>Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero.</p>
        <div className="inputs">
          <div className="inputs-1">
            <input type="text" id="nome" placeholder='Nome'/>
            <input type="text" id="email" placeholder='Email...'/>
          </div>
          <input type="text" id="mensagem" placeholder='Mensage'/>
          <button className='button'>Submit</button>
        </div>
    </div>
  )
}

export default contact