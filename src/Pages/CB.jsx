import React from 'react'
import data from "../CardDetails.json"

export const CB = () => {
    return (
      <div className='cont'>{
        data.map((info) =>{
            if(info.id==="CB")
           return(
             <div className="cardcontainer">
             <div className="card" style={{width: "20rem"}}>
             <img src={info.pic} className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-text">{info.title}</h5>
             </div>
           </div>
           </div>
           )
        }
     )}</div>)
}
