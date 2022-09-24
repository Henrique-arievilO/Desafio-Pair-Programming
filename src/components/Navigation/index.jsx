import React from "react";
import Logo from "../../assets/images/logo.png";
import * as S from "../Navigation/style";

export default function Header() {

    return (
        <S.Nav>
            <S.Logo>
                <img src={Logo} alt="logo" />
            </S.Logo>
            <S.Navigation>
                <S.Li>
                    <S.Link href="#ABOUT">about</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link href="#RECIPES">recipes</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link href="#SUBSCRIBE">subscribe</S.Link>
                </S.Li>
            </S.Navigation>
            <S.Button></S.Button>
        </S.Nav>
    )
}