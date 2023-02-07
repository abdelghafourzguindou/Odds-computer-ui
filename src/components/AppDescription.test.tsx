import React from "react";
import {render} from "@testing-library/react";
import AppDescriptionComponent from "./AppDescription";

describe("AppDescription Tests", () => {

    test("title of the page", () => {
        const title = render(<AppDescriptionComponent />);
        expect(title).toMatchSnapshot();
    });
})


