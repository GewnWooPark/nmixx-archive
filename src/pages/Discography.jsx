import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// 앨범 이미지
import albumSingle4 from "../assets/albums/싱글 4집 Fe304-forward.webp";
import albumFull1 from "../assets/albums/정규 1집 Blue Valentine.webp";
import albumEp3 from "../assets/albums/EP 3집 Fe304-stick out.webp";
import albumEp2 from "../assets/albums/EP 2집 Fe3O4-BREAK.webp";
import albumSingle3 from "../assets/albums/싱글 3집 A Midsummer NMIXX's Dream.webp";
import albumEp1 from "../assets/albums/EP 1집 expergo.webp";
import albumXmas from "../assets/albums/인터렉션 싱글 1집 funky glitter christmas.webp";
import albumSingle2 from "../assets/albums/싱글 2집 ENTWURF.webp";
import albumSingle1 from "../assets/albums/싱글 1집 ADMIRE.webp";

// 앨범 데이터
const albumData = [
    { id: 'single4', title: 'Fe3O4: FORWARD', type: 'Single 4th', img: albumSingle4 },
    { id: 'full1', title: 'Blue Valentine', type: 'Studio 1st', img: albumFull1 },
    { id: 'ep3', title: 'Fe3O4: STICK OUT', type: 'EP 3rd', img: albumEp3 },
    { id: 'ep2', title: 'Fe3O4: BREAK', type: 'EP 2nd', img: albumEp2 },
    { id: 'single3', title: "A Midsummer NMIXX's Dream", type: 'Single 3rd', img: albumSingle3 },
    { id: 'ep1', title: 'expergo', type: 'EP 1st', img: albumEp1 },
    { id: 'xmas', title: 'Funky Glitter Christmas', type: 'Intermixxion Single', img: albumXmas },
    { id: 'single2', title: 'ENTWURF', type: 'Single 2nd', img: albumSingle2 },
    { id: 'single1', title: 'AD MARE', type: 'Single 1st', img: albumSingle1 },
];

function Discography() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="discography">
            <h2 className="discography__title">음반!</h2>

            {/*엘범 컨테이너*/}
            <div className="album-slider-container">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    slideToClickedSlide={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    speed={400}
                    className="album-swiper"
                >
                    {albumData.map((album) => (
                        <SwiperSlide key={album.id} className="album-slide">
                            <img src={album.img} alt={album.title} className="album-img" draggable="false" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="tracklist-wrapper">
                <div className="tracklist-panel">
                    <div className="tracklist-tail"></div>

                    <h3 className="panel-album-title">{albumData[activeIndex]?.title}</h3>
                    <p className="panel-album-type">{albumData[activeIndex]?.type}</p>

                    <div className="track-list-divider"></div>

                    <div className="track-space">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discography;