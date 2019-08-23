import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

const projects = {
  casa: {
    name: "CASA Website",
    dates: "May 2019 - Present",
    tech: "JS, ReactJS, Material-UI, Firebase",
    desc: `A one man project, with design input from the organization that will use it, that I started because I was in this organzation for a while and knew that having a website for the org will help spread the word of it\'s 
        existence and to organize news and events related to the org and it\'s interests. Data, such as news postings, event listings, and current executive members are saved in a Google Firebase realtime database and a authorize user
        can edit and add data from the website after authentication or through the database console.`
  },
  leadwiz: {
    name: "Leadwiz",
    dates: "January 2019 - June 2019",
    tech: "Java, Android SDK, Android Studio",
    desc: `A three man project started with friends at the request of the company Looking Cube to build a mobile app to replicate the funcationality of physical scanners they used for their expo/event registration services.
        This project was worked on a contractual basis and the core of the app was finished around April with updates being requested at the discretion of the company, although my focused shifted elsewhere after the core of work was done.
        The core of the app is data retrieval from encrypted QR codes used to store event attendees information and store that info locally and on the companies database. I worked on setting up the initial data structures to be used and
        the flow of data along with the design later down the line.`
  }
};

const ProjectScreen = () => (
  <Container>
    <Header as="h1" className="homeTitle" content="Projects" />
    <Header as="h3">
      This page will serve to give more info on the bigger projects I have
      worked on or am currently working on
    </Header>
    <p>
      To start off, this personal page was built using{" "}
      <span>
        <b>React with the Semantic UI framework</b>
      </span>{" "}
      which I try to keep updated as much as possible.
    </p>
    <Grid>
      {Object.keys(projects).map(key => (
        <Grid.Row key={key}>
          <Header className="project-name" as="h3">
            {projects[key].name} | {projects[key].dates}
          </Header>
          {projects[key].desc}
          <b>Tech used: {projects[key].tech}</b>
        </Grid.Row>
      ))}
    </Grid>
  </Container>
);

export default ProjectScreen;
