import React, { useState } from 'react';
import './ContactCard.css';

function Card(props) {
    const [selected, setSelected] = useState(false)
    const handleChange = () => {
        setSelected(!selected)
    }
    return (
        < div className={"contact-card " + props.color + (selected ? ' active ' : '')} onClick={handleChange} >
            <div className="card-name">{props.name}</div>
            <div className="card-tarif">
                <span className='dengi'>руб</span>
                <span className='mesyaz'>{props.tarif}</span>/мес
            </div>
            <div className="card-razmer">{props.razmer}</div>
            <div className="card-traffic">{props.traffic}</div>
        </ div >
    )
}

export default Card
