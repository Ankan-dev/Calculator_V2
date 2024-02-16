import React, { useState } from 'react'
import '../App.css'
function Screen({first , second, opr ,result,flag}) {
  
  return (
    <>
        <div className="screen_wrap">
            <div className="screen_container">
                <div className="history">
                  {
                    flag===0?(
                      <span></span>
                    ):flag===1?(
                      <span>{first} {opr}</span>
                    ):(
                      <span>{first} {opr} {second}</span>
                    )                    
                  }
                </div>
                <div className="screen">
                  { 
                    result!==undefined?<span>{result}</span>:(
                     
                      opr==undefined?<span>{first}</span>:<span>{second}</span>
                     
                    )
                  }
                </div>
            </div>
        </div>
    </>
  )
}

export default Screen