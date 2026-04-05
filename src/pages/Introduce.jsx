import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
//소개 탭 사진모음
import lilyImg from "../assets/members/Lily.png";
import haewonImg from "../assets/members/Haewon.png";
import sullyoonImg from "../assets/members/Sullyoon.png";
import baeImg from "../assets/members/Bae.png";
import jiwooImg from "../assets/members/Jiwoo.png";
import kyujinImg from "../assets/members/Kyujin.png";
import nmixxImg from "../assets/members/Nmixx.jpeg";

const memberData = [
    { id: 'lily', name: 'LILY', korName: '릴리', img: lilyImg, bio: '본명 : 릴리 진박 머로우', mbti: 'ENFP' },
    { id: 'haewon', name: 'HAEWON', korName: '해원', img: haewonImg, bio: '본명 : 오해원', mbti: 'ISTP' },
    { id: 'sullyoon', name: 'SULLYOON', korName: '설윤', img: sullyoonImg, bio: '본명 : 설윤아', mbti: 'ISFP' },
    { id: 'bae', name: 'BAE', korName: '배이', img: baeImg, bio: '본명 : 배진솔', mbti: 'ENFP' },
    { id: 'jiwoo', name: 'JIWOO', korName: '지우', img: jiwooImg, bio: '본명 : 김지우', mbti: 'ESFP' },
    { id: 'kyujin', name: 'KYUJIN', korName: '규진', img: kyujinImg, bio: '본명 : 장규진', mbti: 'ESFJ' },
];

function Introduce() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [popupImg, setPopupImg] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <section className="introduce">
            <div className="introduce__container">
                <div className="introduce__group">
                    <div className="introduce__group-photo">
                        <a href="https://namu.wiki/w/NMIXX" target="_blank" rel="noopener noreferrer">
                            <img src={nmixxImg} alt="NMIXX 단체사진" />
                        </a>
                    </div>
                    <div className="introduce__group-info">
                        <h2 className="info-title">NMIXX(엔믹스)</h2>
                        <div className="info-details">
                            <p><strong>데뷔일 :</strong> 2022.02.22</p>
                            <p><strong>소속사 :</strong> JYP Entertainment</p>
                            <p><strong>장르 :</strong> 믹스팝 (MIXX POP), R&B</p>
                            <p><strong>팬덤명 :</strong> 엔써🐬</p>
                            <p><strong>데뷔 음반 : </strong>싱글 1집 ADMIRE</p>
                            <p><strong>응원봉 : </strong>믹스틱</p>
                            <p>NMIXX는 now, new, next, 미지수 n을 뜻하는 문자 'N'과 조합, 다양성을 상징하는 단어 'MIX'의 합성어로서 '새로운 시대를 책임질 최상의 조합'이라는 의미를 갖고 있습니다.</p>
                        </div>

                    </div>
                </div>
                <div className="introduce__members-interactive">
                    <div className="swiper-section">
                        <Swiper
                            onSwiper={setSwiperInstance}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 250,
                                modifier: 1.5,
                                slideShadows: true,
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            modules={[EffectCoverflow]}
                            className="member-swiper"
                        >
                            {memberData.map((member, index) => (
                                <SwiperSlide
                                    key={member.id}
                                    className="member-slide"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        onClick={() => swiperInstance?.slideTo(index)}
                                        title="클릭하면 중앙으로 이동합니다"
                                        style={{ userSelect: 'none', pointerEvents: 'auto' }}
                                        draggable="false"
                                    />
                                    <button
                                        className="zoom-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPopupImg(member.img);
                                        }}
                                        title="확대해서 보기"
                                        style={{ pointerEvents: 'auto' }}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            <line x1="11" y1="8" x2="11" y2="14"></line>
                                            <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="info-panel">
                        <h3 className="info-panel__title">Name : {memberData[activeIndex]?.korName}</h3>
                        <p className="info-panel__eng">{memberData[activeIndex]?.name}</p>

                        <div className="info-panel__content">
                            <p className="info-panel__bio">{memberData[activeIndex]?.bio}</p>
                            <div className="info-panel__stats">
                                <p><strong>MBTI :</strong> {memberData[activeIndex]?.mbti}</p>
                            </div>
                        </div>

                        <div className="info-panel__actions">
                            <a href={`https://namu.wiki/w/${memberData[activeIndex]?.korName}${memberData[activeIndex]?.korName === '릴리' || memberData[activeIndex]?.korName === '지우' ? '(NMIXX)' : ''}`} target="_blank" rel="noopener noreferrer" className="btn-wiki">
                                상세정보
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {popupImg && (
                <div className="image-popup" onClick={() => setPopupImg(null)}>
                    <div className="image-popup__content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImg} alt="원본 확대 이미지" />
                        <button className="image-popup__close" onClick={() => setPopupImg(null)}>✕</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Introduce;