import React from 'react';
import './ClickyCard.css';

const ClickyCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ClickyCard;