import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            image="images/img-9.jpg"
                            title="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            image="images/img-2.jpg"
                            title="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            image="images/img-3.jpg"
                            title="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem
                            image="images/img-4.jpg"
                            title="Experience Football on Top of the Himilayan Mountains"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            image="images/img-8.jpg"
                            title="Ride through the Sahara Desert on a guided camel tour"
                            label="Adrenaline"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
