import React from 'react'
import './Frame.css'

const Frame = (props) => (
  <div className="Frame">
    <img className="FrameImg" src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Frame
