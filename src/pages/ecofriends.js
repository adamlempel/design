import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'
import Frame from '../components/Frame'
import '../layouts/ecofriends.css'

const EcofriendsPage = () => (
  <div>
    <div className="HeroGroup">
      <h1></h1>
      <p></p>
    </div>
    <div className="Cards">
      <h2>Ecofriends</h2>
      <h3>
        A gamified mobile app that helps people take environmental action by
        adapting game mechanics, feedback and a clear sense of personal impact.
      </h3>
    </div>
    <div className="Prototype">
      <iframe
        height="900px"
        width="500px"
        scale="60%"
        frameBorder="0"
        src="https://projects.invisionapp.com/share/MRVFFFPPZYA#/screens/399482951"
      >
        {' '}
      </iframe>
    </div>
    <Frame image="https://miro.medium.com/max/1400/1*EmZyLcSAUcsJRq04ST6zRw.png"></Frame>
    <Section
      title="Overview"
      text="I worked alongside two other UX designers to create a mobile app for social good. We then found a potential business partner to work with in WarnerMedia and their subsidiary Cartoon Network."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*oL9TLmlpainT_-3sQsD0rg.png"></Frame>
    <Section
      title="Hypothesis"
      text="People are generally aware of the climate crisis and want to make a difference.
      How might we engage people to act in an environmentally conscious way and inform them of the benefits of their lifestyle choices?"
    ></Section>
    <Section
      title="User Research"
      text="We conducted 12 interviews with our users to discover needs, frustrations and pain points related to environmental action."
    ></Section>
    <Frame image="https://miro.medium.com/max/1062/1*llGe4wk17egVU4qFc6yhBA.png"></Frame>
    <Section
      title="Insights"
      text="People need clear actionable tasks and goals to help the environment,
      and they often don’t know what the actual impact is of their individual actions to help the environment
      People would be more inclined to take action as part of a team"
    ></Section>
    <Section title="Persona"></Section>
    <Frame image="https://miro.medium.com/max/1400/1*C_hLL7bp-ua9hL7svizwEg.png"></Frame>
    <Section
      title="Reframing the Problem"
      text="Mark knows it’s important to help the environment yet receives conflicting information on what exactly to do via YouTube, NPR and social media.
      How might we help Mark be a better, more informed global citizen and develop life-long habits that benefit the planet?"
    ></Section>
    <Section
      title="Business Partner — WarnerMedia"
      text="WarnerMedia could drive change in the entertainment industry by setting an example for holistic sustainability initiatives."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*3usamWGMRZyj0KH5O0p-SA.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*fEBWsg3O8N2lNHuir2DjZg.png"></Frame>
    <h3>WarnerMedia subsidiary Cartoon Network Games</h3>
    <Frame image="https://miro.medium.com/max/1400/1*7dJ1RUvzvc0Kn27cmy6Tpg.png"></Frame>
    <Section
      title="Design Studio"
      text="From our research we determinded that Mark needs bite sized missions that he can do as a part of a team in order to take environmental action. He also needs to be able to clearly see the impact of his actions."
    ></Section>
    <Frame image="https://miro.medium.com/max/604/1*uPsg5S5GbcdTGJrjeOOmvw.png"></Frame>
    <Frame image="https://miro.medium.com/max/652/1*O1ATStyz0kI0hiMLssRVsg.png"></Frame>
    <Section title="Mid-Fi Sketches"></Section>
    <Frame image="https://miro.medium.com/max/664/1*gLN1-DtMkEE-B6feO_mygg.png"></Frame>
    <Frame image="https://miro.medium.com/max/668/1*xfYitbr7fh4P0ulRqzZ8Ng.png"></Frame>
    <Section
      title="Game Research"
      text="Environmental action has no immediate feedback and gamification can provide clear actionable tasks and feedback. We focused on Yu-Kai Chou’s Octalysis framework because he is a game designer himself.
He says there are 8 core drives that motivate people to play games."
    ></Section>{' '}
    <h3>Yu Kai Chou's Octalysis Framework</h3>
    <Frame image="https://miro.medium.com/max/1400/1*x8NoJZM3TjWMVJsk9RXItQ.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*qoRwV8ArYoD4Zozvelb6GA.png"></Frame>
    <Section title="Hi-Fi Design"></Section>
    <Frame image="https://miro.medium.com/max/1400/1*A5GoO95fSiCS9sghLFCH5A.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*dZ7D3h9-IsGHUX-5t2lwbw.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*X2KAo55PIPuushWCBVYocA.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*NjSd44Wdr4fC6JcPye7bfA.png"></Frame>
    <Section title="Wireflow"></Section>
    <Frame image="https://miro.medium.com/max/1896/1*-DA2ci9KOdMCy8dDtWLnAg.png"></Frame>
    <Frame image="https://miro.medium.com/max/1636/1*0swOXecYOOUb09_sB7dHvA.png"></Frame>
    <Section title="Hi-Fi Prototype"></Section>
    <Section
      title="Hi-Fi Usability Test"
      text="There is a 97% succeess rate in our HI-FI protoype and the average task completion time is only 26s, which is a 55% improvement over our competitors product. "
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*YP1-gySDKk2whdiKKkk7Jg.png"></Frame>
    <Section
      title="Key Success Metrics"
      text="Using the Google Heart Framework we determined our key success metrics being user adoption rate, number of missions accomplished and litres of CO2 saved from users playing our app."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*DkVBsor7GjefBUmYJnKPtQ.png"></Frame>
    <Section
      title="Next Steps and Recommendations"
      text="We recommend to revise the Hi-Fi prototype and conduct further usability tests. After we go live we will then track key success metrics."
    ></Section>
  </div>
)

export default EcofriendsPage
