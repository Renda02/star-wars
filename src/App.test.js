// __tests__/fetch.test.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render,  waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./components/Main";

const server = setupServer(
  rest.get("/http://localhost:3004/", (req, res, ctx) => {
    return res(
      ctx.json({
        greeting: [
          {
            name: "Luke Skywalker",
            height: "172",
            birth_year: "19BBY",
            id: "1",
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<Router><Main  /></Router>);

  await waitFor(() => screen.getByTestId("name-1"));

  expect(screen.getByTestId("name-1")).toHaveTextContent("Luke Skywalker");

});
