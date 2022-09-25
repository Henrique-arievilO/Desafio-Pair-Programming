import React from "react";
import * as S from "./style";

export default function MenuMob() {
	return (
		<S.Nav>
			<S.Menu>
				<a href="#about">
					<S.Item>about</S.Item>
				</a>
				<a href="#recipes">
					<S.Item>recipes</S.Item>
				</a>
				<a href="#subscribe">
					<S.Item>subscribe</S.Item>
				</a>
			</S.Menu>
		</S.Nav>
	);
}
