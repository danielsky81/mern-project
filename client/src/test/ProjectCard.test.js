import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { screen } from "@testing-library/react";
import { render } from './render';
import ProjectCard from "../components/ProjectCard";

const project = {
  id: 1,
  name: "Test Project",
  status: "Not Started"
}

it('should render project name', async () => {

  render(<ProjectCard project={project} />, {
    mocks: {
      Query: {
        project: () => ({
          id: 1,
          name: "Test Project",
          status: "Not Started"})
      }
    }
  }
  );

  await screen.findByText("Test Project");
})