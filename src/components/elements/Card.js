import React from "react";
import styled from "styled-components";

function CardPortfolio(props) {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<CardL>
				<h3>{props.title}</h3>
				<CardImage>
					<img src={`/images/portfolio/${props.image}`} alt={props.title} />
				</CardImage>
				<p>{props.text}</p>
			</CardL>
		</a>
	);
}

function CardPublication(props) {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<CardH>
				<h4>{props.title}</h4>
				<CardImage>
					<img src={`/images/publications/${props.image}`} alt={props.title} />
				</CardImage>
				<p>
					<i>{props.journal}</i> – {props.date}
				</p>
			</CardH>
		</a>
	);
}

export { CardPortfolio, CardPublication };

const Wrapper = styled.div`
	margin: 50px 40px 100px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 40px;
	justify-items: center;
`;

export const WrapperL = styled(Wrapper)`
	@media (max-width: 1700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const WrapperH = styled(Wrapper)`
	@media (max-width: 1700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Card = styled.div`
	width: 300px;
	height: 225px;
	position: relative;
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-rows: 1fr 1fr;
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

	&:hover {
		transform: scale(1.1, 1.1);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	h3 {
		color: black;
		font-size: 19px;
		font-weight: 580;
		margin: 20px 0 0 20px;
		width: 250px;
	}

	p {
		color: rgba(0, 0, 0, 0.8);
		font-weight: 400;
		font-size: 14px;
	}
`;

const CardL = styled(Card)`
	width: 500px;
	height: 400px;

	h4 {
		color: black;
		font-size: 14px;
		font-weight: 550;
		margin: 20px 0 0 20px;
		width: 250px;
	}

	@media (max-width: 550px) {
		width: 300px;
		height: 200px;
	}
`;

const CardH = styled(Card)`
	width: 500px;
	height: 400px;

	h4 {
		color: black;
		font-size: 19px;
		font-weight: 550;
		margin: 20px 0 0 20px;
		width: 450px;
	}

	@media (max-width: 550px) {
		width: 300px;
		height: 300px;

		h4 {
			color: black;
			font-size: 14px;
			font-weight: 550;
			margin: 20px 0 0 20px;
			width: 250px;
		}
	}
`;

const CardImage = styled.div`
	width: 100%;
	height: 45%;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img {
		max-width: 90%;
		max-height: 50%;
		height: auto;
		object-fit: contain;
	}
`;

// .Cards h2 {
//     margin: 50px 20px;
//     font-size: 60px;
//     text-align: center;
//     font-weight: 700;
//     background: linear-gradient(104deg, black 0, white 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
// }
