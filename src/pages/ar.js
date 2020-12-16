import React from 'react'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Link from 'gatsby-link'
import Frame from '../components/Frame'
import '../layouts/ar.css'

const ARPage = () => (
  <div>
    <div className="HeroGroup">
      <h1></h1>
      <p></p>
    </div>
    <div className="Cards">
      <h2>Augmented Reality</h2>
      <h3>
        Prototypes to envision practical use cases for Augmented Reality apps.
      </h3>
      <div className="Prototype">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6Onpab87TqA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p></p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aFbsIdThLPg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p></p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HViXxTUXww4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <Section
      title="Overview"
      text="I worked as a solo UX designer for a 1 week to create 3 interaction design prototypes showcasing practical uses of augmented reality apps tied to real world situations "
    ></Section>
    <Section
      title="Research"
      text="Using Google's Design Thinking framework as a guide we set out to identify 10 challenges that our typical user might face "
    ></Section>

    <div className="UserChallenges">
      <h3>
        {' '}
        <b>User Challenges</b>
      </h3>
      <p>
        1.People find it frustrating having to look down at their phone or
        computer screen while cooking.{' '}
      </p>
      <p>
        {' '}
        2. It is annoying to look at your phone every time you want to search
        for books or things online when a friend recommends it.
      </p>{' '}
      <p>
        3. People don't like to be in their phones all the time, especially when
        it interrupts a conversation or people hanging out in together in a
        group.
      </p>{' '}
      <p>
        4. Language learning apps are abstract and removed from reality and it
        is annoying to look in your phone every time you want to know how to say
        something in another language."
      </p>
    </div>
    <Section
      title="Insight"
      text="By empathizing with our users we uncovered three key insights to guide us in the design process. Users want to stay engaged in the real world and screens can get in the way of the action. Additionally, users want to learn more about the real world. Finally, users want an augmented reality experience that is seamlessly integrated into their daily lives."
    ></Section>
    <Section
      title="Design Studio"
      text="In order transition from ideation to design we first made paper sketches in a design studio phase in order come up with three concepts that we can move forward to prototype. "
    ></Section>
    <div className="Favorites">
      <p>Our three favorite concepts</p>
      <p>1. Book shopping</p>
      <p>2. Language learning</p>
      <p>3. Cooking recipes</p>
    </div>
    <Section
      title="Prototypes"
      text="Using Apple's Xcode and Reality Composer we prototyped our designs for 3 different AR design solutions."
    ></Section>
    <Section
      title="1. Book Shopping"
      text="Easily see prices, add to cart, author info and user ratings by picking up a hardcover or paperback."
    ></Section>
    <div className="Prototype">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6Onpab87TqA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <Section
      title="2. Language Learning"
      text="Learn the names of objects around you in any language by using a simple open palm gesture."
    ></Section>
    <div className="Prototype">
      <p>Launguage learning in Hebrew</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5-xbWUS1kPs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>Language learning in English </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aFbsIdThLPg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>{' '}
    </div>
    <Section
      title="3. Cooking"
      text="Easily see the recipes above the oven or stove while you are cooking or baking without having to look away."
    ></Section>
    <div className="Prototype">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HViXxTUXww4"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <Section
      title="Next Steps"
      text="For the next steps we will test our prototypes with users and refine the designs based on the results of user interviews and usability tests. 

We are also interested in carrying this design process further and coming up with new designs for AR apps and user interfaces."
    ></Section>
  </div>
)

export default ARPage
