import styled from "styled-components";

export const Nav = styled.nav`
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Logo = styled.figure`
	width: 4rem;
	height: 4rem;

	img {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 600px) {
		width: 3rem;
		height: 3rem;
	}
`;
export const Navigation = styled.ul`
	min-width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	@media (max-width: 800px) {
		display: none;
	}
`;
export const Li = styled.li`
	width: 10rem;
	height: 3.5rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		border: 3px solid var(--gray900);
		cursor: pointer;
	}
`;
export const Link = styled.a`
	font-size: 1.5rem;
	text-transform: uppercase;
`;
export const Button = styled.button`
	width: 3rem;
	height: 1.5rem;
	border: none;
	border-top: 5px solid var(--gray900);
	border-bottom: 5px solid var(--gray900);
	background: transparent;
	display: none;
	z-index: 999;

	@media (max-width: 800px) {
		display: initial;
		cursor: pointer;
	}
`;
