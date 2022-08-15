import React from 'react'
import '../index.css';
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
  return (
    <div className='button'>
        <div className='reply-box'>
            <BsArrow90DegLeft type='button' className='iev' onClick={() => navigate(-1)} />
            <p className='reply-text'>Reply</p>
        </div>
        <div className='reply-box'>
            <BsArrow90DegLeft type='button' className='iev' onClick={() => navigate(-1)} />
            <p className='reply-text'>Reply</p>
        </div>
        <div className='reply-box'>
            <BsArrow90DegRight type='button' className='iev' onClick={() => navigate(1)} />
            <p className='reply-text'>Reply</p>
        </div>
    </div>
  )
}

export default Button
