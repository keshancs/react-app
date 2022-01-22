import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item-link" to={props.path}>
                    <figure
                        className="cards__item-image-wrap"
                        data-category={props.label}
                    >
                        <img
                            src={props.image}
                            alt="Travel"
                            className="cards__item-image"
                        />
                    </figure>
                    <div className="cards__item-info">
                        <h5 className="cards__item-title">{props.title}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
