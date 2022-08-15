import React from 'react'
import '../index.css';
import Logo from '../images/LOGO(1).png';
import data from '../data';

const Body = () => {
//   const summ = new Map([
//     [ "mon", 17.45  ],
//     [ "tue", 34.91  ],
//     [ "wed", 52.36  ],
//     [ "thu",  31.07  ],
//     [ "fri",  23.29  ],
//     [ "sat",  43.28  ],
//     [ "sun",  25.48  ],
// ])
// let sum = 0;

// summ.forEach(value => {
// sum += value * 4;

// });
  return (
    <div className=''>
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

        <p className='invoice'>Invoice</p>
              <table>
                <tr>
                  <th className='th'>Type</th>
                  <th className='th'>Quantity</th>
                  <th className='th'>Price</th>
                </tr>
                {data.map((item) => {
            return (
                <tr className='td'>
                  <td>{item.type}</td>
                  <td className='iq'>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              )
            })}
          </table>
          <hr />
          <div className='st'>
          <p className='stp'>Sub-total</p>
          <p className='stp'></p>
          </div>

          <div className='st'>
          <p className='stp'>Delivery</p>
          <p className='stp'></p>
          </div>
          <hr style={{marginBottom: "20px"}} />

          <div className='st'>
          <p className='stp'>Total (plus VAT)</p>
          <p className='stp' style={{marginBottom: "10px"}}></p>
          </div>
        </div>
        <div className='purple'>
          {/* Link */}
          <p className='uns'>Unsuscribe | Update your profile | <br />
              15 - 18, Vics Street, Dees Estate, VI, Lagos</p>
        </div>
    </div>
  )
}

export default Body
