import React, {useEffect, useState} from "react";
import ReactJson from "react-json-view";
import toast from "react-hot-toast";
import {Alert} from "@mui/material";
import {Empire} from "../../types/Empire";
import postOdds from "../../api /OddsComputerApi";
import UploadJsonComponent from "./UploadJsonComponent";

type Props = {
    setOdds: Function
}

export default function UploadAndPreviewJsonComponent({setOdds}: Props) {
    const [empire, setEmpire] = useState<Empire | undefined>(undefined);

    useEffect(() => {
        if (empire) {
            postOdds(empire).then(oddsResult => {
                setOdds(oddsResult);
            }).catch(error => toast.error(`Error when getting odds: ${error.message}`))
        }
    }, [empire])

    return <div className="flex">
        <div className="flex-1 flex p-5 m-5 bg-gray-50 rounded-lg border-2 border-gray-300 bg-inherit">
            <UploadJsonComponent setEmpire={setEmpire} />
        </div>
        <div className="flex-1 flex p-5 m-5 bg-gray-50 rounded-lg border-2 border-gray-300 bg-inherit">
            {empire ? <ReactJson  src={empire}/>
                : <Alert sx={{ width: "100%" }} className="h-12" severity="warning">No content loaded!</Alert>
            }
        </div>
    </div>
}