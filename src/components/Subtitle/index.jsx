import React from 'react'
import { Line } from '../../global/GlobalStyle'
import styled from 'styled-components'

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

`


export default function Subtitle(p) {
  return (
    <Box>
          <SubtitleText>{p.subtitle}</SubtitleText>
          <Line/>
    </Box>
  )
}
