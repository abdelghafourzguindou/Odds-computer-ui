import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UploadJsonComponent from "./UploadJsonComponent";


describe("UploadJsonComponent Tests", () => {

    test("No file uploaded", () => {
        render(<UploadJsonComponent setEmpire={() => null} />);
        const fileInput : any = screen.getByLabelText(/upload/i);
        expect(fileInput.files.length).toBe(0);
    });

    test("Input file is present", () => {
        const component = render(<UploadJsonComponent setEmpire={() => null} />);
        const fileInput = component.container.querySelector("#upload-file")
        expect(fileInput).toBeInTheDocument();
    });
})

describe("Upload a file", () => {
    test("A file is uploaded", () => {
        const testFile = new File(["hello"], "test.json");
        render(<UploadJsonComponent setEmpire={() => null} />);

        const fileInput : any = screen.getByLabelText(/upload/i);
        expect(fileInput.files.length).toBe(0);

        userEvent.upload(fileInput, testFile);

        expect(fileInput.files.length).toBe(1);
    });
})
