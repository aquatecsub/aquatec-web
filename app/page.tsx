import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HeroIntro from "./components/HeroIntro";
import ServicesGallery from "./components/ServicesGallery";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="site">
      <HeroIntro />

      <Sidebar />

      <div className="main-area page-transition">
        <Header />

        <section className="home-content">
          <ServicesGallery />

          <section className="home-lower">
            <Certifications />

            <Clients />
          </section>
        </section>
        <Footer />
      </div>
    </main>
  );
}