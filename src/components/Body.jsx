import React from 'react'
import '../index.css';
import Logo from '../images/LOGO(1).png';

const Boby = () => {
  return (
    <div className='body'>
      <div className='ord-may'>
        <p className='order-no'>Order no: 12645</p>
        <p className='may'>May 25, 2022</p>
      </div>
      <img src={Logo} alt="" className='logo' />

      <div>
        <p className='fabrics'>Your fabrics are almost there</p>
        <div>
          <button className='confp'><b>Confirm Pickup</b></button>
          <p className='street'>#02, Ofo Street, Maryland, Lagos</p>
        </div>
      </div>
    </div>
  )
}

export default Boby
