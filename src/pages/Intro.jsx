import { Link } from 'react-router-dom'
import introBg from '../assets/intro-bg.mp4'

function Intro() {
    return (
        <div className="intro">
            <video
                className="intro__video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
                >
                <source src={introBg} type="video/mp4" />
            </video>
        <div className="intro__overlay" />
        <div className="intro__content">
            <h1>NMIXX ARCHIVE</h1>
            <p>엔믹스 헤헤</p>
            <Link to="/home" className="intro__button" >
                이곳을 클릭하세요...
            </Link>
        </div>
    </div>
    );
}
export default Intro