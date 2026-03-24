import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import lilyImg from "../assets/members/Lily.png";
import haewonImg from "../assets/members/Haewon.png";
import sullyoonImg from "../assets/members/Sullyoon.png";
import baeImg from "../assets/members/Bae.png";
import jiwooImg from "../assets/members/Jiwoo.png";
import kyujinImg from "../assets/members/Kyujin.png";
import nmixxImg from "../assets/members/Nmixx.png";

const memberData = [
    { id: 'lily', name: 'LILY', korName: '릴리', img: lilyImg, bio: 'NMIXX의 맏언니이자 독보적인 음색의 메인보컬입니다.', mbti: 'ENFP' },
    { id: 'haewon', name: 'HAEWON', korName: '해원', img: haewonImg, bio: 'NMIXX의 든든한 리더이자 탄탄한 보컬 실력을 자랑합니다.', mbti: 'ISTP' },
    { id: 'sullyoon', name: 'SULLYOON', korName: '설윤', img: sullyoonImg, bio: 'NMIXX의 비주얼이자 맑은 음색으로 팬들을 사로잡습니다.', mbti: 'ISFP' },
    { id: 'bae', name: 'BAE', korName: '배이', img: baeImg, bio: 'NMIXX의 분위기 메이커이자 매력적인 저음의 소유자입니다.', mbti: 'ENFP' },
    { id: 'jiwoo', name: 'JIWOO', korName: '지우', img: jiwooImg, bio: 'NMIXX의 댄스 담당이자 유니크한 래핑이 매력적입니다.', mbti: 'ESFP' },
    { id: 'kyujin', name: 'KYUJIN', korName: '규진', img: kyujinImg, bio: 'NMIXX의 앙큼한 막내이자 못하는 게 없는 올라운더입니다.', mbti: 'ESFJ' },
];

function Introduce() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [popupImg, setPopupImg] = useState(null);

    return (
        <section className="introduce">
            <div className="introduce__container">
                {/* 상단 그룹 정보 영역 */}
                <div className="introduce__group">
                    <div className="introduce__group-photo">
                        <a href="https://namu.wiki/w/NMIXX" target="_blank" rel="noopener noreferrer">
                            <img src={nmixxImg} alt="NMIXX 단체사진" />
                        </a>
                    </div>
                    <div className="introduce__group-info">
                        <h2 className="info-title">NMIXX</h2>
                        <div className="info-details">
                            <p><strong>데뷔일</strong> 2022.02.22</p>
                            <p><strong>소속사</strong> JYP Entertainment</p>
                            <p><strong>장르</strong> 믹스팝 (MIXX POP)</p>
                        </div>
                        <p className="info-description">
                            NMIXX는 now, new, next, 미지수 n을 뜻하는 문자 'N'과 조합, 다양성을 상징하는 단어 'MIX'의 합성어로서 '새로운 시대를 책임질 최상의 조합'이라는 의미를 갖고 있습니다.
                        </p>
                    </div>
                </div>

                {/* 하단 3D 커버플로우 & 동적 정보 패널 영역 */}
                <div className="introduce__members-interactive">
                    <div className="swiper-section">
                        <Swiper
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
                            // 💡 Swiper 자체 이벤트를 사용해 클릭 무시 현상 완벽 해결!
                            onClick={(swiper) => {
                                if (typeof swiper.clickedIndex === 'number') {
                                    swiper.slideTo(swiper.clickedIndex);
                                }
                            }}
                            modules={[EffectCoverflow]}
                            className="member-swiper"
                        >
                            {memberData.map((member) => (
                                <SwiperSlide key={member.id} className="member-slide">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        onDoubleClick={() => setPopupImg(member.img)}
                                        title="더블클릭하면 크게 볼 수 있습니다"
                                        style={{ userSelect: 'none' }}
                                        draggable="false"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="info-panel">
                        <h3 className="info-panel__title">Name : {memberData[activeIndex].korName}</h3>
                        <p className="info-panel__eng">{memberData[activeIndex].name}</p>

                        <div className="info-panel__content">
                            <p className="info-panel__bio">{memberData[activeIndex].bio}</p>
                            <div className="info-panel__stats">
                                <p><strong>MBTI :</strong> {memberData[activeIndex].mbti}</p>
                            </div>
                        </div>

                        <div className="info-panel__actions">
                            <a href={`https://namu.wiki/w/${memberData[activeIndex].korName}${memberData[activeIndex].korName === '릴리' || memberData[activeIndex].korName === '지우' ? '(NMIXX)' : ''}`} target="_blank" rel="noopener noreferrer" className="btn-wiki">
                                🔗 나무위키 보기
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 더블클릭 팝업 모달 */}
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