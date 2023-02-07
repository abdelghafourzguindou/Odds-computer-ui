import AppBar from "@mui/material/AppBar";
import {Toolbar, Typography} from "@mui/material";
import React from "react";

export default function AppTitleComponent() {
    return <AppBar position="static">
        <Toolbar disableGutters>
            <Typography className="text-center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Compute the The Millennium Falcon odds
            </Typography>
        </Toolbar>
    </AppBar>
}