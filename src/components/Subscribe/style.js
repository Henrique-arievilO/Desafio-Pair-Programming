import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	min-height: 15rem;
	padding: var(--padSection);
	background: var(--green100);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 425px) {
		padding: var(--padSectionMob);
	}
`;
export const Info = styled.p`
	font-size: 1.5rem;
	text-align: center;

	@media (max-width: 500px) {
		font-size: 1.2rem;
	}
`;

export const Input = styled.input`
	width: 55%;
	min-width: 500px !important;
	height: 6rem;
	padding: 0 2rem;
	margin: 2.5rem 0 2rem;
	font-size: 20px;
	display: flex;
	align-items: center;
	background: var(--gray150);
	border: none;

	&:focus {
		outline: none;
		border-top: 6px solid transparent;
		border-bottom: 6px solid white;
	}

	@media (max-width: 600px) {
		width: 100%;
		height: 5rem;
		min-width: unset !important;
		margin: 2rem 0 1rem;
	}
`;

export const Btn = styled.button`
	width: 12rem;
	height: 4rem;
	font-size: 20px;
	letter-spacing: 5px;
	font-weight: bold;
	background: transparent;
	border: 5px solid var(--gray900);
	cursor: pointer;

	@media (max-width: 425px) {
		width: 100%;
		height: 5rem;
	}
`;
