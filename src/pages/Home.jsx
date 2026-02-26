import mainBanner from "../assets/메인배너.jpg"
function Home() {
    return (
        <main className="home">
            <section className="home__banner">
                <img src={mainBanner} alt="메인 베너" className="home__banner-image" />
                <div className="home__banner-overlay">
                    <p className="home__banner-subtitle">NMIXX 1st 정규 앨범</p>
                    <h1 className="home__banner-title">Blue Valentine</h1>
                    <div className="home__banner-actions">
                        <a
                            className="home__banner-button"
                            href="https://www.youtube.com/watch?v=EmeW6li6bbo&list=RDEmeW6li6bbo&start_radio=1"
                            target="_blank"
                            rel="noreferrer"
                            >뮤직비디오 보기
                        </a>
                        <a
                            className="home__banner-button home__banner-button--secondary"
                            href="https://www.melon.com/song/detail.htm?songId=600243411"
                            target="_blank"
                            rel="noreferrer"
                            >
                            감상하기
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home