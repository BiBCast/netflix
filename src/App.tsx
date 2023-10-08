import { Banner } from "./components/Banner/Banner";
import { Card } from "./components/Card/Card";
import { CardFaq } from "./components/CardFaq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import frontPage from "./components/assets/frontPage.jpg";
import Tv from "./components/assets/tv.png";
import DecivePile from "./components/assets/device-pile.png";
import Child from "./components/assets/child.png";
import Mobile from "./components/assets/mobile-0819.jpg";

import "./index.css";
import { Separetor } from "./components/Separetor/Separetor";
export type CardContent = {
  title: string;
  paragraf: string;
  img: string;
  isImageRight: boolean;
};
function App() {
  return (
    <>
      <div className="front_page">
        <img src={frontPage} />
        <Header />
        <Home />
      </div>
      <Banner />
      <Card
        CardContent={{
          title: "Goditi Netflix sulla tua TV",
          paragraf:
            "Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.",
          isImageRight: true,
          img: Tv,
        }}
      />
      <Separetor />
      <Card
        CardContent={{
          title: "Guarda Netflix ovunque",
          paragraf:
            "Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti.",
          isImageRight: false,
          img: DecivePile,
        }}
      />
      <Separetor />

      <Card
        CardContent={{
          title: "Crea profili per i bambini",
          paragraf:
            "I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.",
          isImageRight: true,
          img: Child,
        }}
      />
      <Separetor />

      <Card
        CardContent={{
          title: "Scarica le tue serie da guardare offline",
          paragraf: "Disponibili solo nei piani senza pubblicità.",
          isImageRight: false,
          img: Mobile,
        }}
      />
      <Separetor />

      <CardFaq />
      <Footer />
    </>
  );
}

export default App;
