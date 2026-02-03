import {Routes, Route, Router} from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home.jsx";
import Introduce from "./pages/Introduce.jsx";
import Discography from "./pages/Discography.jsx";
import Video from "./pages/Video.jsx";
import Schedule from "./pages/Schedule.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/video" element={<Video />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
    )
}
export default App;