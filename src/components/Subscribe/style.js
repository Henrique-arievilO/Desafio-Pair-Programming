import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	min-height: 20rem;
	padding: var(--padSection);
	background: var(--green100);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* gap: 1.5rem; */

	@media (max-width: 425px) {
		padding: var(--padSectionMob);
	}
`;
export const Info = styled.p`
	font-size: 30px;
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

	background: transparent;
	border: 6px solid var(--gray900);

	@media (max-width: 425px) {
		width: 100%;
		height: 5rem;
	}
`;
