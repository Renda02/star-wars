// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
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
  render(<Main url="/http://localhost:3004/" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Main url="/http://localhost:3004/" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await waitFor(() => screen.getByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
