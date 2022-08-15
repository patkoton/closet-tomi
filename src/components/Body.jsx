import React from 'react'
import '../index.css';
import Logo from '../images/LOGO(1).png';
import data from '../data'

const Body = () => {
  const sumQ = data.map(item => item.price).reduce((acc, item) => item + acc);
  
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
                  <td className='iq'>{item.quantity}</td>
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
        <p className='stp' style={{marginLeft: "-12px"}}>Total(<small>plus VAT</small>)  </p>
        <p className='stp' style={{marginBottom: "10px"}}>{sumQ}</p>
        </div>
    </div>
  )
}

export default Body
