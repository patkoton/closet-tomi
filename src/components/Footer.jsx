import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='purple'>
          <p className='uns'>
              <Link to="" className='uns'>Unsubscribe</Link> | <Link to="" className='uns'>Update your profile</Link> | <br />
              15 - 18, Vics Street, Dees Estate, VI, Lagos
            </p>
        </div>
  )
}

export default Footer
