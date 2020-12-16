import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'

const ProjectsPage = () => (
  <div>
    <div className="HeroGroup">
      <h1></h1>
      <p></p>
    </div>

    <div className="Cards">
      <h2>Projects</h2>
      <div className="CardGroup">
        <Link to={'/ar'}>
          <Card
            className="CardAR"
            title="Augmented Reality"
            text="Interaction design prototypes"
            image="https://storage.googleapis.com/uxfolio/5e46b0e9cae25e00049559cb/5eaf0dcbb71d16000461a9a8/ba5pjPYlYfG10cD1.jpeg"
          />
        </Link>
        <Link to={'/ecofriends'}>
          <Card
            className="Ecofriends"
            title="Ecofriends"
            text="A gamified mobile app that helps people take environmental action"
            image="https://miro.medium.com/max/1400/1*4t2iRb2TGKXtQFhND4MsSw.png"
          />
        </Link>
        <Link to={'/popcharge'}>
          <Card
            className="POP Charge"
            title="POP Charge"
            text="A mobile app to rent portable phone chargers from kiosks in real world locations"
            image="https://miro.medium.com/max/1400/1*m1Pl5dneTgTJ40jAsT68tQ.png"
          />
        </Link>
        <Link to={'/packit'}>
          <Card
            className="Packit"
            title="Packit"
            text="A responsive mobile site that lets people create and save packing lists"
            image="https://miro.medium.com/max/1400/1*w2ajb0wDowfNNcF7DDI_XQ.png"
          />
        </Link>
      </div>
    </div>
  </div>
)

export default ProjectsPage
