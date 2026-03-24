import mainBanner from "../assets/background1.mp4"
function Home() {
    return (
        <main className="home">
            <section className="home__banner">
              <video
                  className="home__banner-video"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                  >
                  <source src={mainBanner} type="video/mp4" />

              </video>
            </section>
        </main>
    )
}
export default Home