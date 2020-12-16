import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'
import Frame from '../components/Frame'
import '../layouts/ecofriends.css'

const PopchargePage = () => (
  <div>
    <div className="HeroGroup">
      <h1></h1>
      <p></p>
    </div>
    <div className="Cards">
      <h2>Popcharge</h2>
      <h3>
        An app to rent portable mobile phone batteries from kiosks in real world
        locations.
      </h3>
      <div className="Prototype">
        <iframe
          width="442"
          height="935"
          src="https://adam130707.invisionapp.com/console/share/F41V9YUOJN"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>
      <Frame image="https://miro.medium.com/max/1344/0*mzgw3Qbr-2BEeX4d"></Frame>
    </div>
    <Section
      title="Overview"
      text="I worked alongside three other UX designers to create a mobile app for a portable battery rental startup. We were freelance consultants on the project and we conducted research, built a Hi-Fi prototype and handed over a spec guide, project report and a presentation deck for developers to build out the app."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/0*0lgmgiijlL-wE596"></Frame>
    <Section
      title="Hypothesis"
      text="Commuters, tourists and people on a night out often run out of phone battery and want to stay connected. 
How might we remove the stress of running out of battery, and reconnect them to their GPS, friends and family by allowing them to charge their phone on the go?"
    ></Section>
    <Section
      title="User Research"
      text="We conducted 20 interviews with our users to discover needs, frustrations and pain points related having enough phone battery charge. We created an interview discussion guide, but also intuitvely asked follow up questions, to uncover needs we may not have anticipated."
    ></Section>
    <Frame image="https://miro.medium.com/max/696/1*_QQAJZ7DWw0sN7EMFFjdkg.png"></Frame>
    <Section
      title="Insights"
      text="Users would rent a portable charger if they were desperate for a charge
and think a couple dollars per charge is a fair amount of money.
Additionally, users run out of battery if they are traveling as a tourist, commuter or on a night out."
    ></Section>
    <Section title="Persona"></Section>
    <Frame image="https://miro.medium.com/max/1400/0*y-y7ZBiXdh9BxVDU"></Frame>
    <Section title="User Journey"></Section>
    <Frame image="https://miro.medium.com/max/1400/1*LZmnSGgQoQ1jNE_8YlkFew.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*rf_zuTQbQHYwZgwGH5pcMQ.png"></Frame>
    <Section
      title="Reframing the Problem"
      text="How might we remove the stress of running out of battery, and reconnect Neil to his friends and family by allowing him to charge his phone on the go?"
    ></Section>
    <Section title="Competitor Analysis"></Section>
    <Frame image="https://miro.medium.com/max/666/1*f-ITfcjjdTtnMaO8-nN-tA.png"></Frame>
    <Frame image="https://miro.medium.com/max/642/1*SYMruKTN9dvtl32IYhs-cQ.png"></Frame>
    <Section
      title="Competitor Usability Test"
      text="We examined a mobile app for a direct competitor Redshare, and conducted usability tests with 5 users to determine how easy and intuitive their app is to use."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/0*nfId3Ue_L1j81DvH"></Frame>
    <Section
      title="Design Studio"
      text="From research we determinded that Neil must be able to easily identify which button to press to rent the battery. He must also easily be able to find how much he is being charged and not be surprised by hidden fees."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*KrOGmf3Ln5DLvOKJn9pFIw.png"></Frame>
    <Frame image="https://miro.medium.com/max/980/1*jnBrcjPEIHhaF6wkH0DXKw.png"></Frame>
    <Section title="Lo Fi Sketches"></Section>
    <Frame image="https://miro.medium.com/max/3088/1*2gMf8ztZp4K3JrsXCTwAGg.png"></Frame>
    <Section title="Mid Fidelity Prototype"></Section>{' '}
    <h3>Scan and Rent Wireflow</h3>
    <Frame image="https://miro.medium.com/max/1400/1*yXBgt3JXftHda7q7y29oOg.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*v3UbHS3ULnvuUEq8sLdLIA.png"></Frame>
    <h3>Find Directions Wireflow</h3>
    <Frame image="https://miro.medium.com/max/1400/1*KZOVP7JjG0RqW7I1ydaZoA.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*K4EvFV2xl79TyIy643lv1w.png"></Frame>
    <Section
      title="Mid Fidelity Usability Test"
      text="There was a marked improvement vs. our competitor in our users’ ability to complete tasks with overall success rate at 100% in our proposed POP Charge design. Additionally users rated the process of completing tasks as very easy and average task completion time is only 29 seconds which is a 51% improvement over the competitor’s product."
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*A4do0zmZADOO6z2cWr4f9Q.png"></Frame>
    <Section title="Hi-Fi Design"></Section>
    <Frame image="https://miro.medium.com/max/1400/1*ql3RGt-yK6VjiTvBQ7TI7w.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*GtwSxIOAP9LygNoa4ui5Aw.png"></Frame>
    <Section title="Style Guide"></Section>
    <Frame image="https://miro.medium.com/max/1022/1*rkfLtPqySjeJKNUl-0JHfA.png"></Frame>
    <Section title="Hi-Fi Prototype"></Section>
    <h3>Find Location Flow</h3>
    <Frame image="https://miro.medium.com/max/1400/1*uPh1JD3g7EmLcMu3JdZNnw.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*7BG8ZSScdDGAFe0ygzLp9w.png"></Frame>
    <h3>Scan and Rent Flow</h3>
    <Frame image="https://miro.medium.com/max/1400/1*rapaUJcZyh11VjzOhF9NHg.png"></Frame>
    <Frame image="https://miro.medium.com/max/1400/1*kpgeMluSbcceVSazMLEPDg.png"></Frame>
    <Section
      title="Hi-Fi Usability Test"
      text="There is a 97% succeess rate in our HI-FI protoype and the average task completion time is only 26s, which is a 55% improvement over our competitors product. "
    ></Section>
    <Frame image="https://miro.medium.com/max/1400/1*MeWTGb38Loznfs8ZC8qSBg.png"></Frame>
    <Section
      title="Next Steps and Recommendations"
      text="We recommend a timer feature that clocks up with dollar amount due as a user is renting the battery. Also, we aim to work on a coupon and rewards feature for real world locations that house kiosks like cafes, restaurants or bars. "
    ></Section>
  </div>
)

export default PopchargePage
