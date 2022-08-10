import {Slider} from "./Components/Slider";
import {useState} from "react";
import "./App.css";

function App() {
    const [userOnPage, setUserOnPage] = useState(document.visibilityState);

    return (
        <div className="container">
            <Slider userOnPage={userOnPage}/>
        </div>
    );
}

export default App;
