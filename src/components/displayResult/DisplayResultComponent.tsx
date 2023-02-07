import React from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import Typography from "@mui/material/Typography";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  odds: number | undefined
};

function DisplayResultComponent({odds}: Props) {

    return <div className="flex flex-col p-5 bg-gray-50 rounded-lg border-2 border-gray-300 bg-inherit">
        <Typography variant="subtitle2" gutterBottom>
            The probability to get captured is
        </Typography>
        {odds !== undefined &&
        <CircularProgressbar className="h-16 w-16" value={odds} text={`${odds}%`} background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
            })}/>
        }
    </div>;
}
export default DisplayResultComponent;
