import React from "react";
import {render} from "@testing-library/react";
import AppTitleComponent from "./AppTitleComponent";

describe("AppTitle Tests", () => {

    test("title of the page", () => {
        const title = render(<AppTitleComponent />);
        expect(title).toMatchSnapshot();
    });
})


