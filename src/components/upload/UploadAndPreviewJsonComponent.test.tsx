import {render, screen} from "@testing-library/react";
import React from "react";
import UploadAndPreviewJsonComponent from "./UploadAndPreviewJsonComponent";

describe("UploadAndPreviewJsonComponent Tests", () => {
    test("No content is loaded", () => {
        render(<UploadAndPreviewJsonComponent setOdds={() => null} />);
        const fileContent = screen.queryByText(/No content loaded/i);
        expect(fileContent).toBeInTheDocument()
    });
})
