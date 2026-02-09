import {Routes, Route, Link, useLocation, NavLink} from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home.jsx";
import Introduce from "./pages/Introduce.jsx";
import Discography from "./pages/Discography.jsx";
import Video from "./pages/Video.jsx";
import Schedule from "./pages/Schedule.jsx";
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
                <span className="logo-mark">NMIXX</span>
                <span className="logo-text">ARCHIVE</span>
                    </Link>
            </div>
            <div className="topbar__center">
                <nav className="topbar__nav">
                    <NavLink
                    to="/introduce"
                    className={({ isActive }) =>
                    isActive ? "topbar__link topbar__link--active" : "topbar__link"
                    }
                    >
                        소개
                    </NavLink>
                    <NavLink
                    to="/discography"
                    className={({ isActive }) =>
                    isActive ? "topbar__link topbar__link--active" : "topbar__link"
                    }
                    >
                        음반
                    </NavLink>
                    <NavLink
                    to="/video"
                    className={({ isActive }) =>
                    isActive ? "topbar__link topbar__link--active" : "topbar__link"
                    }
                    >
                        영상
                        </NavLink>
                    <NavLink
                    to="/schedule"
                    className={({ isActive }) =>
                    isActive ? "topbar__link topbar__link--active" : "topbar__link"
                    }
                    >
                        스켸쥴
                        </NavLink>
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