import styled from "styled-components";

export const Nav = styled.nav`
	width: 30rem;
	height: unset;
	margin-top: 20rem 0 0 0;
`;

export const Menu = styled.ul`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.5rem;
`;

export const Item = styled.li`
	width: 100%;
	height: 3rem;
	font-size: 1rem;
	background: var(--green100);
`;
