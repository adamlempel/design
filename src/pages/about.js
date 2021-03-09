import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'
import '../layouts/about.css'

const AboutPage = () => (
  <div>
    <Section
      title="Adam Lempel is a UX Designer based in New York City"
      text="He is always looking for a better way of doing things. He conceives of new approaches to UX / UI design based on user research and then tests and refines. Adam designs and reiterates apps, websites, and VR / AR interfaces and also designs music for advertisements and sonic branding"
    ></Section>
    {/* <div className="CV">
      <img src="http://box2364.temp.domains/~adamlemp/wp-content/uploads/2020/12/AdamLempel_CV-1.svg"></img>
    </div> */}
    <div className="Resume">
      <a
        href="https://docs.google.com/document/d/12NJE38Gees9au90YWqaVXn66oovRS29OEX5J43vdLzc/edit?usp=sharing"
        target="_blank"
      >
        Link
      </a>{' '}
      to my Resume
    </div>
    <br></br>
    <div className="Resume">
      <iframe
        width="1000"
        height="1200"
        src="https://docs.google.com/document/d/12NJE38Gees9au90YWqaVXn66oovRS29OEX5J43vdLzc/edit?usp=sharing"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>{' '}
    </div>
  </div>
)

export default AboutPage
