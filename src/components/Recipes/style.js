import styled from "styled-components";

export const SectionStyle = styled.section`
    width: 100%;
   padding: 2rem;
    background-color: var(--gray150);
`
export const Container = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
			flex-direction: column;
		}
`
