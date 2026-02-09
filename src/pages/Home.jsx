import mainBanner from "../assets/메인배너.jpg"
function Home() {
    return (
        <main className="home">
            <section className="home__banner">
                <img src={mainBanner} alt="메인 베너" className="home__banner-image" />
            </section>
        </main>
    )
}
export default Home