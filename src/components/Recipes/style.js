import styled from "styled-components";

export const SectionStyle = styled.section`
	width: 100%;
	padding: var(--padSection) 5%;
	background-color: var(--gray150);

	@media (max-width: 500px) {
		padding: var(--padSectionMob);
	}
`;
export const Container = styled.div`
	width: 100%;
	margin-top: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
