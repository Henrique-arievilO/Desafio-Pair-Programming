import React from "react";
import Subtitle from "../Subtitle";
import * as S from "./style";

export default function Subscribe() {
	return (
		<S.Section id="subscribe">
			<Subtitle name="subscribe" />
			<S.Info>Sign up for newsletter</S.Info>
			<S.Input type="email" placeholder="Your Email" />
			<S.Btn>SUBMIT</S.Btn>
		</S.Section>
	);
}
