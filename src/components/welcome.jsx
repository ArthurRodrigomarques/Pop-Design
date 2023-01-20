
import React from 'react'
import { useState } from 'react';
import Inicial from '../inicial/Inicial';
// fotos
import welcome_1 from '../img/welcome-1.jpg'
import welcome_2 from '../img/welcome-2.jpg'
import{AiFillCloseCircle} from 'react-icons/ai'
import './welcome.css'

function MyComponent() {
  const handleClose = () => {
    //chamar uma função ou mudar o estado aqui para remover o subcomponente
  };

  return (
    <div>
      <welcome onClose={handleClose} />
    </div>
  );
}
const welcome = ({onClose}) => {

  return ( 
    <div className='well'>

        <div className="leftwell">
              <h1>Welcome to Pop Design</h1>
            <img src={welcome_1} alt="" />
              <p>You are allowed to download, modify and use this template for your commercial or business websites. 
              <br />
              Please tell your friends about <a href="https://www.facebook.com/tooplate">Tooplete</a>. That will be very helpful for us. Thank you.</p>
        </div>  

        <div className="rightwell">

          <AiFillCloseCircle onClick={onClose} size={28} className='close'/>

          <p>You are NOT allowed to put this template ZIP file for a download purpose on any template collection website. 
            <br />
          If you have any kind of question or comment, please feel free to contact us. You are welcome.</p>
          <img src={welcome_2} alt="" />
        </div>

    </div>
  )
}

export default welcome
