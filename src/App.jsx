import {Routes, Route, Link, NavLink} from "react-router-dom";
import nmixxLogo from "./assets/엔믹스 로고.png";
import Home from "./pages/Home.jsx";
import Introduce from "./pages/Introduce.jsx";
import Discography from "./pages/Discography.jsx";
import Video from "./pages/Video.jsx";
import Schedule from "./pages/Schedule.jsx";
import './App.css'

function App() {
    const debutDate = new Date("2022-02-22");
    const today = new Date();
    const diffMs = today.getTime() - debutDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const ddayText = `D+${diffDays}`;


    return (
        <>

        <header className='topbar'>
            <div className="topbar__left">
                <Link to="/" className="logo-link">
                <img src={nmixxLogo} alt="NMIXX 로고" className="logo-image" />
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
                        활동
                        </NavLink>
                </nav>
            </div>
            <div className="topbar__right">
                <div className="dday-chip">{ddayText}</div>
                <button className="search-button" type="button" aria-label="통합 검색 열기">
                    <span className="search-icon">🔍</span>
                </button>
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/video" element={<Video />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
            </>
    )
}
export default App;