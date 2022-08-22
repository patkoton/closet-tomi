import React from 'react'
import "../index.css";
import { BsStarFill, BsPrinter } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import Body from './Body';


const Top = ({ cls, setCls, ref }) => {
  // const ref = useRef();
    //Starred Messages
  return (
    <div className='top'>
        <div className="ordin">
            <p className="order">Order receipt from Closet_Tomi</p>
            <div className="inbox">inbox</div>
        </div>

        <BsStarFill className={`ai ${cls}`} type="button" onClick={() => setCls((cls) => (cls === "clz" ? "rod" : "clz"))} />

        <div className='bsp'>
          <ReactToPrint content={() => ref.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <BsPrinter type='button' style={{cursor: "pointer"}} onClick={handlePrint} />
              )}
            </PrintContextConsumer>
          </ReactToPrint>

          <div style={{ display: "none" }}>
            <Body ref={ref} />
          </div>

          {/* <BsPrinter type='button' style={{cursor: "pointer"}} onClick={() => window.print()} /> */}
          
          <FiExternalLink style={{marginLeft: "50px", marginRight: "20px", cursor: "pointer"}} type='button' />
        </div>
    </div>
  )
}

export default Top
