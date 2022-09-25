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
					<S.Link href="#about">about</S.Link>
				</S.Li>
				<S.Li>
					<S.Link href="#recipes">recipes</S.Link>
				</S.Li>
				<S.Li>
					<S.Link href="#subscribe">subscribe</S.Link>
				</S.Li>
			</S.Navigation>
			<S.Button></S.Button>
		</S.Nav>
	);
}
