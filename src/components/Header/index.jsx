import React from "react";
import Navigation from "../Navigation/index";
import * as S from "../Header/style";

export default function Header() {
	return (
		<S.HeaderStyle>
			<Navigation />
			<S.Title>recipes</S.Title>
		</S.HeaderStyle>
	);
}
