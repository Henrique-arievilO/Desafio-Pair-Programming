import styled from "styled-components";
import Background from "../../assets/images/home.png";

export const HeaderStyle = styled.header`
	width: 100%;
	height: 100vh;
	padding: 2rem;
	background-image: url(${Background});
	background-size: cover;
	background-position: center center;

	@media (max-width: 500px) {
		background-position: right;
	}
`;

export const Title = styled.h1`
	font-size: 5rem;
	text-transform: uppercase;
	text-align: center;
	height: calc(100% - 3rem);
	display: flex;
	justify-content: center;
	align-items: center;
`;
