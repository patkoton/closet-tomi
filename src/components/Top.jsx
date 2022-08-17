import React from 'react'
import "../index.css";
import { BsStarFill, BsPrinter } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

const Top = ({ cls, setCls }) => {
    //Starred Messages
  return (
    <div className='top'>
        <div className="ordin">
            <p className="order">Order receipt from Closet_Tomi</p>
            <div className="inbox">inbox</div>
        </div>

        <BsStarFill className={`ai ${cls}`} type="button" onClick={() => setCls((cls) => (cls === "clz" ? "rod" : "clz"))} />

        <div className='bsp'>
          <BsPrinter type='button' style={{cursor: "pointer", marginLeft: "-130px"}} onClick={() => window.print()} />
          
          <FiExternalLink style={{marginLeft: "50px", cursor: "pointer"}} type='button' />
        </div>
    </div>
  )
}

export default Top
