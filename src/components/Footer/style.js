import styled from "styled-components";

export const FooterStyle = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const MediaNav = styled.div`
	width: 100%;
	height: 18rem;
	padding: 0 6%;

	background: var(--gray100);

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const MediaIcons = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Img = styled.img`
	width: 3rem;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 3rem;
	}

	a {
		color: var(--gray900);
	}

	li {
		font-size: 22px;
	}
`;

export const Credits = styled.section`
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--green800);

	p {
		width: fit-content;
		color: white;
		font-size: 16px;
	}
`;
