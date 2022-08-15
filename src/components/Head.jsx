import React from 'react'
import '../index.css';
import { IoReturnUpBack, IoEllipsisVertical } from 'react-icons/io5'
 import { useNavigate } from 'react-router-dom';

const Head = () => {
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
                    </div>

                    <p className='closet-me'>to me</p>
                </div>

                <div className='io5'>
                    <IoReturnUpBack className='irup' type='button' onClick={() => navigate(-1)} />
                    <IoEllipsisVertical className='iev' type='button' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Head
