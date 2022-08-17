import React from 'react'
import '../index.css';
import { IoReturnUpBack, IoEllipsisVertical } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { BsStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Head = ({ cls, setCls }) => {
     const navigate = useNavigate();
  return (
    <div className='head'>
        <div className='closet'>
            <div className='ellipse'></div>
            <div className='closet-dt'>
                <div className='closet-att'>
                    <div className='closet-address'>
                        <p className='closet-text'>Closet_tomi</p>
                        <p className='closet-time'>12:00 (3 hours ago)</p>
                        <p className='address'> closettomi@mail.com </p>
                    </div>

                    <p className='closet-me'>to me <IoIosArrowDown className='io' type='button' /> </p>
                </div>

                <div className='io5h'>
                    <p className='closet-timed'>12:00 (3 hours ago)</p>

                    <IoReturnUpBack className='irup' type='button' onClick={() => navigate(-1)} />

                    <BsStarFill className={`ai2 ${cls}`} type="button" onClick={() => setCls((cls) => (cls === "clz" ? "rod" : "clz"))} />

                    <IoEllipsisVertical className='iev' type='button' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Head
