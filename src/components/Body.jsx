import React, { forwardRef } from 'react'
import '../index.css';
import Logo from '../images/LOGO.Mobile.png';
import LoGo from '../images/LOGO.Desktop.png';
import data from '../data'

const Body = forwardRef((props, ref) => {
  const sumQ = data.map(item => item.price).reduce((acc, item) => item + acc);
  
  return (
    <div className='body-container' ref={ref}>
      <div className='body'>
        <div className='ord-may'>
          <p className='order-no'>Order no: 12645</p>
          <p className='may'>May 25, 2022</p>
        </div>
        <img src={Logo} alt="" className='logo' />
        <img src={LoGo} alt="" className='loGo' />

        <div className='fabconf'>
          <p className='fabrics'>Your fabrics are almost there</p>
          <div>
            <button className='confp'><b>Confirm Pickup</b></button>
            <p className='street'>#52, Ajerogun Street, Maryland, Lagos</p>
          </div>
        </div>

        <p className='invoice'>Invoice</p>
        <table>
            <thead>
              <tr>
                <th className='th'>Type</th>
                <th className='th'>Quantity</th>
                <th className='th'>Price</th>
              </tr>
            </thead>
            {data.map((item) => {
            return (
            <tbody className='td'>
              <tr>
                <td>{item.type}</td>
                <td className='iq'>{item.quantity}yards</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
            )
            })}
        </table>
        <hr />
        <div className='st'>
          <p className='stp'>Sub-total</p>
          <p className='stpq'>{sumQ}</p>
        </div>

        <div className='st'>
          <p className='stp'>Delivery</p>
          <p className='stpd'>2000</p>
        </div>
        <hr style={{marginBottom: "20px"}} />

        <div className='st'>
          <p className='stpt'>Total(<small>plus VAT</small>)</p>
          <p className='stpta'>{sumQ}</p>
        </div>
      </div>
    </div>
  )
})

export default Body
