import React from "react";
import styled from "styled-components";
import { Line } from "../../global/GlobalStyle";

const Box = styled.div`
	min-height: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const SubtitleText = styled.h2`
	font-size: 2.5rem;
	text-transform: uppercase;
	font-family: var(--fontStyle);
	font-weight: 600;
	letter-spacing: 5px;
	text-align: center;

	@media (max-width: 500px) {
		font-size: 2rem;
	}
`;

export default function Subtitle(p) {
	return (
		<Box>
			<SubtitleText>{p.name}</SubtitleText>
			{p.line ? <Line /> : null}
		</Box>
	);
}
