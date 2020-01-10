import React from "react";
import Button from "../Button/index"

function Card(props) {
    return (
        <div className="card" style={{width: 200}}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.author}.
                <br/>
                    {props.description}
                </p>
                <a className="nav-link" href={props.link}>link to book</a>
                <Button buttonName="remove from favorites"/>
            </div>
        </div>
    )
};

export default Card;
