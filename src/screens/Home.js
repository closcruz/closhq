import React from "react";
import { Header, Container, Image, Grid } from "semantic-ui-react";
import headshot from "../assets/headshot.jpg";

const HomeScreen = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Header className="homeTitle" as="h1" content="Carlos Cruz Ramos" />
        <Image className="headshot" src={headshot} size="small" circular />
      </Grid.Row>
      <Grid.Row>
        <Header sub content="Currently in: Austin, TX area" />
      </Grid.Row>
      <Grid.Row>
        <p>
          I am a recent graduate ('18) from UT Austin looking for software
          engineering opportunities. I have a degree in economics and a minor in
          computer science, along with a passion for all things programming and
          computers. I have primary experience with web development and Android,
          but am constantly reading and learning more. I'm a dependable and
          result-driven programmer that learns extremely well with experience.
          Currently, I am in the Wallbreakers program as a Software Engineer
          trainee and i'm looking to get a start in a Software development
          career to further hone my skills and learn more about the software
          development world.
        </p>
      </Grid.Row>
      <Grid.Row>
        <Header size="medium" content="A Story About Me" />
        <p>
          I feel that most of my life has been about adapting to change. Large
          life altering events and constantly moving around led me to being
          quite adaptive towards challenges that came my way. I found an
          interest for programming in high school, and through courses and self
          teaching I knew I had to incorporate this type of thinking and problem
          solving into any career I'd choose. Given the fact that technology is
          constantly changing and evolving, I knew this would be something I
          would excel at. Now after 5 years of going to university, a few
          part-times, and countless personal learning and work hours, my
          interest has grown into a passion that I wish to grow and cultivate in
          anyway possible.
        </p>
      </Grid.Row>
    </Grid>
  </Container>
);

export default HomeScreen;
