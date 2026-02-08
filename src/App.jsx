import {Routes, Route, Link, useLocation } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home.jsx";
import Introduce from "./pages/Introduce.jsx";
import Discography from "./pages/Discography.jsx";
import Video from "./pages/Video.jsx";
import Schedule from "./pages/Schedule.jsx";
import nmixxLogo from "./assets/엔믹스 로고.png";
import './App.css'

function App() {
    const location = useLocation();
    const isIntro = location.pathname === "/" || location.pathname === "/intro";

    return (
        <>
            {!isIntro && (
        <header className='topbar'>
            <div className="topbar__left">
                <Link to="/home" className="logo-link">
                <img src={nmixxLogo} alt="NMIXX logo"   className="logo-image" />
                <span className="logo-text">ARCHIVE</span>
                    </Link>
            </div>
            <div className="topbar__center">
                <nav className="topbar__nav">
                    <a className="topbar__link" href="/introduce">소개</a>
                    <a className="topbar__link" href="/discography">음반</a>
                    <a className="topbar__link" href="/video">영상</a>
                    <a className="topbar__link" href="/schedule">스케쥴</a>
                </nav>
            </div>
            <div className="topbar__right">
                <div className="dday-chip">D+365</div>
                <button className="search-button" type="button" aria-label="통합 검색 열기">
                    <span className="search-icon">🔍</span>
                </button>
            </div>
        </header>
                )}
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/video" element={<Video />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
            </>
    )
}
export default App;