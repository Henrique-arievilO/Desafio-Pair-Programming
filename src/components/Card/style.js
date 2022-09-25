import styled from "styled-components";
import { Line } from "../../global/GlobalStyle";

export const Card = styled.div`
	width: 30%;
	height: 35rem;
	box-shadow: 0px 7px 6px var(--gray300);

	@media (max-width: 900px) {
		width: 80%;
		height: 80vmin;
	}
	@media (max-width: 500px) {
		width: 100%;
	}
`;
export const Foto = styled.div`
	width: 100;
	height: 50%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const LineRecipe = styled(Line)`
	width: 3rem;
`;

export const Text = styled.div`
	width: 100%;
	height: 50%;
	padding: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #fff;

	h3 {
		font-family: var(--fontStyle);
		font-weight: 400;
		letter-spacing: 2px;
		font-size: 1.5rem;
		margin-top: 2rem;
		text-align: center;
	}
`;
