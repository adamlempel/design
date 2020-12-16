import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'
import Frame from '../components/Frame'
import '../layouts/ecofriends.css'

const PackitPage = () => (
  <div>
    <div className="HeroGroup">
      <h1></h1>
      <p></p>
    </div>
    <div className="Cards">
      <h2>Packit</h2>
      <h3>
        A mobile and desktop site for frequent travelers that allows them to
        cretae and save packing lists and see recommended lists by others
      </h3>
      <div className="Prototype">
        <iframe
          width="438"
          height="930"
          src="//invis.io/RGZLE09Z8AC"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>
      <Frame image="https://miro.medium.com/max/1400/1*yz6GCQtSIu0m_e3kzLlsnA.png"></Frame>
    </div>
    <Section
      title="Overview"
      text="I worked alongside three other UX designers to create Packit, a responsive website for desktop and mobile that makes packing less stressful and more organized for frequent travelers. It saves packing lists so they don’t get lost from trip to trip, and allows frequent travelers to get inspired by what other travelers packed for similar trips. In the redesigned version we introduced clearer call to action buttons and many more categories for types of items, so that travelers can more fully customize their lists."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/0*0lgmgiijlL-wE596"></Frame>
    <Section
      title="Hypothesis"
      text="Packing is a stressful process. While packing, frequent travelers face decision paralysis, are unsure of what they might need, and feel anxiety about over or under packing."
    ></Section>
    <Section
      title="User Research"
      text="To gain a better understanding of the needs and frustrations of frequent travelers we interviewed ten travelers. We first sent out a screener survey to make sure that the travelers we interviewed traveled more than ten times a year. The questions we asked were framed to understand:"
    ></Section>
    <Frame image="https://miro.medium.com/max/1072/1*KtG5a5xlSZowkcokl5jIsA.png"></Frame>
    <Section
      title="Insights"
      text="
      Packing was a highly representative frustration and pain point among frequent travelers; from fear of over/under packing, to anxiety about forgetting key items or not knowing what they might need.
      Frequent travelers rarely have problems with booking tickets or hotels, or with getting to and from the airport, because work usually pays for and arranges everything."
    ></Section>
    <Section title="Persona"></Section>
    <Frame image="https://miro.medium.com/max/1400/0*U1LE98WW-vNwk0uK"></Frame>
    <Section title="User Journey"></Section>
    <Frame image="https://miro.medium.com/max/1400/0*q4auRwQig3VY85Jf"></Frame>
    <Section
      title="Reframing the Problem"
      text="How might we help frequent travelers like Nikki make better choices while packing and also remove stress from the decision making process?
      "
    ></Section>
    <Section
      title="Design Studio"
      text="In our research interviews, frequent travelers expressed frustration about over and under packing. They also could not remember what they needed or didn’t need from their last trip under the hectic conditions of getting ready for their upcoming trip."
    ></Section>
    <Frame image="https://miro.medium.com/max/1092/1*7TBaPArvK8X_EF2Jtc6QWQ.png"></Frame>
    <Frame image="https://miro.medium.com/max/910/1*8cNpRv1BQZmPdFoaLejA4Q.png"></Frame>
    <Frame image="https://miro.medium.com/max/930/1*_Pox_4EalpBS2wJkgnsC4Q.png"></Frame>
    <Section title="Mid Fidelity Prototype"></Section>{' '}
    <Section title="Mid Fidelity Usability Test"></Section>
    <Section title="Hi-Fi Design"></Section>
    <h3>Feature 1: Create Your Own Packing List</h3>
    <Frame image="https://miro.medium.com/max/1400/0*LfOUpVV3vcEKEKMW"></Frame>
    <Frame image="https://miro.medium.com/max/1400/0*H2pp9dHD2gb7jkgo"></Frame>
    <h3>Feature 2: Editor's Picks Packing Templates</h3>
    <Frame image="https://miro.medium.com/max/1400/0*BgwetzMwC375urLe"></Frame>
    <Frame image="https://miro.medium.com/max/1400/0*VfEVQeeiMPbRvVFK"></Frame>
    <h3>Feature 3: Weather For Your Trip</h3>
    <Frame image="https://miro.medium.com/max/1164/0*arsS4Sr_H4AhYpry"></Frame>
    <h3>Feature 4: Top Pick For You</h3>
    <Frame image="https://miro.medium.com/max/1400/0*yx4e3nrfVyzjWzxv"></Frame>
    <Frame image="https://miro.medium.com/max/1400/0*PtWCEYq1909XnrU1"></Frame>
    <Section title="Hi-Fi Prototype"></Section>
    <Section
      title="Hi-Fi Usability Test"
      text="There is a 97% succeess rate in our HI-FI protoype and the average task completion time is only 26s, which is a 55% improvement over our competitors product. "
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*MeWTGb38Loznfs8ZC8qSBg.png"></Frame>
    <Section
      title="Reflections"
      text="As work is stressful and travel is exhausting, our research indicated that packing is one area where we can lighten the stress load of frequent travelers. By offering personalized packing list that won’t get lost from trip to trip we provide them with reassurance that they are packing the right thing. After testing Packit we found that all of the users tested said that they would find this mobile site very useful and would either use it themselves or recommend it to someone they know. We recommend developing further both the mobile and desktop versions of Packit and see a need in a niche market that could potentially have a broad appeal. "
    ></Section>
  </div>
)

export default PackitPage
