import React from 'react';
import styled from 'styled-components';
import './Card.css';

const CardImage = styled.div `
    width: 100%; /* Adjust as needed */
    height: 45%; /* Adjust as needed */
    padding: 10px; /* Add padding if necessary */
    box-sizing: border-box; /* Include padding in the width and height */
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image vertically */
    overflow: hidden; /* Hide any overflow */
    
    img {
        max-width: 90%; /* Scale the image to fit the width */
        max-height: 50%; /* Set a maximum height for the image */
        height: auto; /* Maintain the aspect ratio */
        object-fit: contain; /* Ensure the image fits within the container */
    }
`;

const CardPortfolio = props => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="Card CardL">
            <h3>{props.title}</h3>
            <CardImage>
                <img src={`/images/${props.image}`} alt={props.title} />
            </CardImage>
            <p>{props.text}</p>
        </a>
    );
};

export default CardPortfolio;