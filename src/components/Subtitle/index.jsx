import React from "react"
import styled from "styled-components"

const Box = styled.div`
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const SubtitleText = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  font-family: var(--fontStyle);
  font-weight: 600;
  letter-spacing: 5px;
`


export default function Subtitle(p) {
  return (
    <Box>
      <SubtitleText>{p.name}</SubtitleText>
      {/* {p.line ? <Line /> : null} */}
    </Box>
  )
}
