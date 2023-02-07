import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";


describe("App Tests", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("title of the page", () => {
        const titleElement = screen.getByText(/Compute the The Millennium Falcon odds/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("No content loaded", () => {
        const noContentLoadedTest = screen.getByText(/No content loaded/i);
        expect(noContentLoadedTest).toBeInTheDocument();
    })

    test("No result on the page", () => {
        const titleElement = screen.queryByText(/(100|[0-9]{1,2})\\s%/i);
        expect(titleElement).not.toBeInTheDocument();
    });
})


