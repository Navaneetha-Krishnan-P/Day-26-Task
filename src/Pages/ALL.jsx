import React from 'react'
import data from "../CardDetails.json"
import "./ALL.css"

export const ALL = () => {
    return (
        <div className='cont'>{
        data.map((info,index) => {
            return (
                <div className="cardcontainer all" key={index}>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src={info.pic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text">{info.title}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        )}</div>)
}
