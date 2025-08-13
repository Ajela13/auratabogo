import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Contact from "./components/Contact";

const LandingPage = () => {
  return (
    <main>
        <section id="home">
        <Home />
        </section>
        <section id="gallery">
        <Gallery />
        </section>
        <section id="bio">
        <Biography />
        </section>
        <section id="contact">
            <Contact />
        </section>
    </main>
  );
};

export default LandingPage;