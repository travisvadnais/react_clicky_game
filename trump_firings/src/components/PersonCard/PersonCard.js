import React from 'react';
import './PersonCard.css';

const PersonCard = props => (
  <div className="img-container">
    {/* The onClick is essentially a callback fx calling the calculateScore() fx */}
    <img alt={props.name} id={props.id} src={props.mugshot} onClick={()=>props.calculateScore(props.id)}/>
  </div>
);

export default PersonCard;


