import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	min-height: 45rem;
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Img = styled.img`
	width: 50%;
	object-fit: cover;

	@media (max-width: 768px) {
		width: 100%;
	}
`;
export const Text = styled.div`
	width: 50%;
	padding: 10%;

	background: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	@media (max-width: 768px) {
		width: 100%;
	}

	@media (max-width: 425px) {
		padding: var(--padSectionMob);
	}
`;
