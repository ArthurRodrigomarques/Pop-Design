import React from 'react'
import { useState } from 'react'

import underline from '../img/underline.png'
import {FaHome} from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import {FaHandshake} from 'react-icons/fa'
import {ImBubbles} from 'react-icons/im'

import Welcome  from '../components/welcome'
import Team from '../components/team'
import Work from '../components/work'
import Contact from '../components/contact'
import './inicial.css'



const Inicial = () => {

  const [welOpen, setWelOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);


  return (

    <div className='page'>

    <main className="all">
      <section className='center'>
        <div className="pop">
            <h1>POP design</h1>
            <img src={underline} />
           <p>New HTML Template with pop up pages <br /> and use this layout for your website</p>
        </div>

          {welOpen && <Welcome />}
          {teamOpen && <Team />}
          {workOpen && <Work/> }
          {contactOpen && <Contact/>}
        <div className="elements">

          <div onClick={() => setWelOpen(!welOpen)} className="all-click">
             <FaHome  size={50} className="icon" />
             <p>welcome</p>
          </div>

          <div onClick={() => setTeamOpen(!teamOpen)} className="all-click">
              <IoIosPeople size={50} className="icon"/>
              <p>Our Team</p>
          </div>

          <div  onClick={() => setWorkOpen(!workOpen)} className="all-click">
              <FaHandshake size={50} className="icon"/>
              <p>Our Work</p>
          </div>

          <div onClick={() => setContactOpen(!contactOpen)}  className="all-click">
              <ImBubbles size={50} className="icon"/>
              <p>Contact</p>
          </div>

        </div>
        </section>
    </main>

  </div>
  )
}

export default Inicial