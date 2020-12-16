import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
  margin: 0 0 0;
  background: black;
  background-size: cover;
  height: 800px;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax (200px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax (200px, 1fr));
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }

  @media (max-width: 375px) {
    height: 800px;
  }
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 3;
  grid-template-rows: auto 100%auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }

  @media (max-width: 375px) {
    font-size: 22px;
  }
`

const SectionImage = styled.image`
  height: 50%auto;
  width: 50%auto;
`

const SectionText = styled.p`
  color: white;
  font-family: Anissette-petite;
  font-size: 24px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
  transform: rotate(180deg);
`

const Section = (props) => (
  <SectionGroup>
    <Wave />
    <WaveBottom>
      <Wave />
    </WaveBottom>

    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
      <SectionImage>{props.image}</SectionImage>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
