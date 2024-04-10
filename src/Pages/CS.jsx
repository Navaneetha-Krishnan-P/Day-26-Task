import React from 'react'
import data from "../CardDetails.json"

export const CS = () => {
  return (
    <div className='cont'>{
      data.map((info) =>{
          if(info.id==="CS")
         return(
           <div className="cardcontainer">
           <div className="card" style={{width: "25rem"}}>
           <img src={info.pic} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h4 className="card-text">{info.title}</h4>
           </div>
         </div>
         </div>
         )
      }
   )}</div>)
}
