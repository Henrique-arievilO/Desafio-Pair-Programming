import styled from "styled-components";
import { Line } from "../../Global/GlobalStyle";

export const Card = styled.div`
    width: 25rem;
    height: 40rem;
    margin-top: 2rem;
    box-shadow: 5px 5px 10px var(--gray700);

    @media (max-width: 500px) {
        width: 20rem;
        height: 35rem;
		}
`
export const Foto = styled.div`
    width: 100;
    height: 50%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const LineRecipe = styled(Line)`
    width: 2rem;
`;
export const Text = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;

    h3{
        font-family: var(--fontStyle);
        font-weight: 400;
        letter-spacing: 2px;
        font-size: 20px;
        margin-top: 2rem;
    }
`