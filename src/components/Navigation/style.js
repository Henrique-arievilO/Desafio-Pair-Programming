import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Logo = styled.figure`
    width: 50px;
    height: 50px;
    
    img{
        width: 100%;
        height: 100%;
    }
`
export const Navigation = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
		display: none;
	}
`
export const Li = styled.li`
    width: 30%;
    text-align: center;
    padding: .5rem;
    
    &:hover{
        border: 2px solid var(--gray900);
        cursor: pointer;
    }
`
export const Link = styled.a`
    width: 100%;
    font-size: 16px;
    text-transform: uppercase;
    padding: .5rem;
`
export const Button = styled.button`
    width: 50px;
    height: 25px;
    border: none;
    border-top: 5px solid var(--gray900);
    border-bottom: 5px solid var(--gray900);
    background: transparent;
    display: none;

    @media (max-width: 800px) {
		display: initial;
        cursor: pointer;
	}
`
