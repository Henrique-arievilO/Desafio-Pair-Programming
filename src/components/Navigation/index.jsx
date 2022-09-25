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
				<S.Link href="#about">
					<S.Li>about</S.Li>
				</S.Link>
				<S.Link href="#recipes">
					<S.Li>recipes</S.Li>
				</S.Link>
				<S.Link href="#subscribe">
					<S.Li>subscribe</S.Li>
				</S.Link>
			</S.Navigation>
			<S.Button></S.Button>
		</S.Nav>
	);
}
