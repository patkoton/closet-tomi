import React from 'react'
import "../index.css";
import { BsStarFill } from 'react-icons/bs'
import { useState } from "react";

const Top = () => {
    //Starred Messages
    const [cls, setCls] = useState("clz");
  return (
    <div className='top'>
        <div className="ordin">
            <p className="order">Order receipt from Closet_Tomi</p>
            <div className="inbox">inbox</div>
        </div>
        <div className="ai">
            <BsStarFill className={cls} type="button" onClick={() => setCls((cls) => (cls === "clz" ? "rod" : "clz"))} />
        </div>
    </div>
  )
}

export default Top
