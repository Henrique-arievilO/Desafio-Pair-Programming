import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

:root{
    --gray100: #F2F4F1;
    --gray150: #EFF1EE;
    --gray300: #00000029;
    --gray700: #707070;
    --gray900: #373737;
    --green100: #DFE4DE;
    --green800: #446061;
    
    --cardSize: 25%;

    --padSection: 1rem;
}
`;

export const Line = styled.div`
	height: 0.2rem;
	width: 2rem;
	background: var(--gray900);
`;
