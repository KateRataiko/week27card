import React from "react"
import './ContactCard.css';

function Card(props) {
    return (
        < div className={"contact-card " + props.color}>
            <div className="card-name">{props.name}</div>
            <div className="card-tarif"> {props.tarif}</div>
            <div className="card-razmer">{props.razmer}</div>
            <div className="card-traffic">{props.traffic}</div>
        </div >
    )
}

export default Card
