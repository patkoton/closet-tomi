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
        <div className='closet1'>
            <div className='closet-address'>
                <div className='ellipse'></div>
                <p className='closet-text'>Closet_tomi <br /> <span className='closet-me'>to me</span> </p>
                <p className='closet-time'>12:00 (3 hours ago)</p>
            </div>
            
            <div className=''>
                <IoReturnUpBack className='irup' type='button' onClick={() => navigate(-1)} />

                <IoEllipsisVertical className='iev' type='button' />
            </div>
        </div>
        
        <div className='closet2'>
            <div className='block1'>
                <div className='ellipseD'></div>
                <p className='closet-textD'>Closet_tomi <br /> <span className='closet-meD'>to me <IoIosArrowDown className='io' type='button' /></span></p>
                <p className='addressD'> closettomi@mail.com </p>
            </div>

            <div className='block2'>
                <p className='closet-timeD'>12:00 (3 hours ago)</p>

                <IoReturnUpBack className='irupD' type='button' onClick={() => navigate(-1)} />

                <BsStarFill className={`aiD ${cls}`} type="button" onClick={() => setCls((cls) => (cls === "clz" ? "rod" : "clz"))} />

                <IoEllipsisVertical className='ievD' type='button' />
            </div>
        </div>

    </div>
  )
}

export default Head
