import React from "react";
import toast from "react-hot-toast";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {Box, Button, Stack} from "@mui/material";
import {Empire} from "../../types/Empire";
import AppDescriptionComponent from "../AppDescription";

type Props = {
    setEmpire: Function
}

export default function UploadJsonComponent({setEmpire}: Props) {

    const isFileContentCorrect = (empireFile: Empire): boolean => {
        if (empireFile.countdown && empireFile.countdown > -1 && empireFile.bounty_hunters) {
            return empireFile.bounty_hunters.filter(hunters => !hunters.planet || hunters.day < 0).length === 0;
        }
        return false;
    }

    const convertFileToEmpire = (fileContent: any) => {
        const empireFile: Empire = fileContent;
        if (isFileContentCorrect(empireFile)) {
            setEmpire(empireFile);
        } else {
            toast.error("Bad file content")
        }
    }

    const onFileUpload = (event: any) => {
        const file = event.target.files[0]
        const fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                convertFileToEmpire(JSON.parse(fileReader.result));
            }
        }
        fileReader.onerror = () => {
            toast.error("Error when loading file content")
        }
    }

    return <Box>

        <AppDescriptionComponent />

        <div className="mt-4">
            <Stack id="upload-file" direction="row" alignItems="center" spacing={2} className="flex justify-center items-center">
                <Button variant="contained" component="label" endIcon={<FileUploadOutlinedIcon />}>
                    Upload
                    <input hidden accept="application/JSON" multiple type="file" onChange={onFileUpload}/>
                </Button>
            </Stack>
        </div>
    </Box>
}
