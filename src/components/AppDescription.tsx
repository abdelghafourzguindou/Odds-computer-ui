import React from "react";
import {Stack, Box, Typography, Alert} from "@mui/material";
import ReactJson from "react-json-view";

function AppDescriptionComponent() {

    const dataExample = {
        "countdown": 6,
        "bounty_hunters": [
            {"planet": "Tatooine", "day": 4 },
            {"planet": "Dagobah", "day": 5 }
        ]
    };

    return <Box>
        <div className="flex flex-column mb-3">
            <img width="100" alt="Giskard" src="giskard.png" />
            <img className="ml-auto" width="100" alt="Giskard" src="starwars.png" />
        </div>
        <Typography variant="body2" gutterBottom>
            The application offering users a way to upload a JSON file containing the data intercepted by the rebels about the plans of the Empire and displaying the odds (as a percentage) that the Millennium Falcon reaches Endor in time and saves the galaxy.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
            Example of empire.json file:
        </Typography>
        <ReactJson src={dataExample} collapsed theme="monokai"/>
        <Typography variant="body2" gutterBottom>
            <p>* countdown: number of days before the Death Star annihilates Endor</p>
            <p>* bounty_hunters: list of all locations where Bounty Hunter are scheduled to be present.</p>
            <p>* planet: Name of the planet. It cannot be null or empty.</p>
            <p>* day: Day the bounty hunters are on the planet. 0 represents the first day of the mission.</p>
            <br/>
            <p>The web page will display the probability of success as a number ranging from 0 to 100%:</p>
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={1}>
            <Alert severity="info">0% if the Millennium Falcon cannot reach Endor before the Death Star annihilates Endor</Alert>
            <Alert severity="info">x% if the Millennium Falcon can reach Endor before the Death Star annihilates Endor but might be captured by bounty hunters.</Alert>
            <Alert severity="info">100% if the Millennium Falcon can reach Endor before the Death Star annihilates Endor without crossing a planet with bounty hunters on it.</Alert>
        </Stack>
    </Box>
}
export default AppDescriptionComponent;
