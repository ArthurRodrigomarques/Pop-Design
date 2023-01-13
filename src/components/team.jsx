import React from 'react'

import ImgTeam from '../img/team.jpg'
import{AiFillCloseCircle} from 'react-icons/ai'
import './team.css'


const team = () => {
  return (
    <div className='div-team'>
        <div className="leftteam">
            <h1>Background of Our Team</h1>
            
            <p>Vestibulum aliquet, arcu accumsan lobortis bibendum, justo velit efficitur lorem, at pulvinar mi justo nec lacus. Nullam et libero aliquet, luctus nunc sit amet, tincidunt ligula. Sed finibus ante sed tortor cursus, nec malesuada lectus interdum.</p>
            <br />
            <p>Sed ex turpis, vulputate in efficitur id, lobortis eget nibh. Pellentesque maximus ipsum eget velit imperdiet sodales. Suspendisse in blandit mi.</p>
            <br />
            <p>Pellentesque finibus felis risus, ut malesuada felis viverra at. Quisque accumsan in mi non hendrerit.</p>
            <button className='button'>Read More</button>
        </div>
        <div className="rightteam">
        <AiFillCloseCircle size={28} className='close'/>
        <img src={ImgTeam}/>
        </div>
    </div>
  )
}

export default team