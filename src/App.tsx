import React, {useState} from "react";
import { Toaster } from "react-hot-toast";
import UploadAndPreviewJsonComponent from "./components/upload/UploadAndPreviewJsonComponent";
import DisplayResultComponent from "./components/displayResult/DisplayResultComponent";
import AppTitleComponent from "./components/AppTitleComponent";

function App() {
    const [odds, setOdds] = useState<number | undefined>(undefined);
    return <div className="h-screen flex flex-col">
        <AppTitleComponent />
        <UploadAndPreviewJsonComponent setOdds={setOdds} />
        <div className="flex justify-center">
            <DisplayResultComponent odds={odds}/>
        </div>
        <Toaster position="bottom-center" reverseOrder={false}/>
    </div>;
}
export default App;
