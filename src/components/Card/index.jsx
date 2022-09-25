import React from "react";
import * as S from "./style";

export default function Recipes(p) {
	return (
		<S.Card>
			<S.Foto>
				<img src={p.image} alt={p.name} />
			</S.Foto>
			<S.Text>
				<S.LineRecipe></S.LineRecipe>
				<h3>{p.name}</h3>
			</S.Text>
		</S.Card>
	);
}
