import styled, { createGlobalStyle } from "styled-components";
// import HurmeRegular from "../assets/fonts/HurmeRegular.otf"
// import HurmeSemiBold from "../assets/fonts/HurmeSemiBold.otf"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    color: var(--gray900);
    font-family: var(--fontStyle);
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

    --padSection: 12%;
    --padSectionMob: 5rem 1.5rem;

    --fontStyle: 'Poppins', sans-serif;
}

body{
    width: 100%;
    color: var(--gray900)
}

p{
    font-size: 16px;
}
`;

export const Line = styled.div`
	height: 0.3rem;
	width: 4rem;
	background: var(--gray900);
`;

// export const FontStyle = createGlobalStyle`
//     @font-face {
//         font-family: 'Hurme Geometric';
//         src: url(${HurmeRegular}) format(otf),
//              url(${HurmeSemiBold}) format(otf);
//     }
// `
