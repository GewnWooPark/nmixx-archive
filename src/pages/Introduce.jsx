import lilyImg from "../assets/members/Lily.png";
import haewonImg from "../assets/members/Haewon.png";
import sullyoonImg from "../assets/members/Sullyoon.png";
import baeImg from "../assets/members/Bae.png";
import jiwooImg from "../assets/members/Jiwoo.png";
import kyujinImg from "../assets/members/Kyujin.png";
import nmixxImg from "../assets/members/Nmixx.png";

function Introduce() {
    return (
        <section className="introduce">
            <div className="introduce__group">
                <div className="introduce__group-photo">
                    <a href="https://namu.wiki/w/NMIXX" target="_blank">
                    <img src={nmixxImg} alt="NMIXX 단체사진" />
                    </a>
                </div>

                <div className="introduce__group-info">
                    <h2>그룹명 : NMIXX</h2>
                    <h2>데뷔일 : 2022.02.22</h2>
                    <h2>소속사 : JYP Entertainment</h2>
                </div>
            </div>

            <div className="introduce__members">
                <div className="member-strip">
                    <a href="https://namu.wiki/w/릴리(NMIXX)" target="_blank" className="member-strip__item">
                        <img src={lilyImg} alt="릴리" />
                    </a>
                    <a href="https://namu.wiki/w/해원" target="_blank" className="member-strip__item">
                        <img src={haewonImg} alt="해원" />
                    </a>
                    <a href="https://namu.wiki/w/설윤" target="_blank" className="member-strip__item">
                        <img src={sullyoonImg} alt="설윤" />
                    </a>
                    <a href="https://namu.wiki/w/배이" target="_blank" className="member-strip__item">
                        <img src={baeImg} alt="배이" />
                    </a>
                    <a href="https://namu.wiki/w/지우(NMIXX)" target="_blank" className="member-strip__item">
                        <img src={jiwooImg} alt="지우" />
                    </a>
                    <a href="https://namu.wiki/w/규진" target="_blank" className="member-strip__item">
                        <img src={kyujinImg} alt="규진" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Introduce;
