import { Banner } from "./components/Banner/Banner";
import { Card } from "./components/Card";
import { CardFaq } from "./components/CardFaq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import fronPage from "./components/assets/fronPage.jpg";
import "./index.css";
function App() {
  return (
    <>
      <div className="front_page">
        <img src={fronPage} />
        <Header />
        <Home />
        <Banner />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <CardFaq />
      <Footer />
    </>
  );
}

export default App;
