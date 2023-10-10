import { Banner } from "./components/Banner/Banner";
import { Card } from "./components/Card/Card";
import { CardFaq } from "./components/CardFaq/CardFaq";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

import "./index.css";
import { Separator } from "./components/Separator/Separator";
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
        <Header />
        <img src={window.location.href + "/frontPage.jpg"} />
        <Home />
      </div>
      <Banner />
      <Card
        CardContent={{
          title: "Goditi Netflix sulla tua TV",
          paragraf:
            "Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.",
          isImageRight: true,
          img: window.location.href + "/tv.png",
        }}
      />
      <Separator />
      <Card
        CardContent={{
          title: "Guarda Netflix ovunque",
          paragraf:
            "Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti.",
          isImageRight: false,
          img: window.location.href + "/device-pile.png",
        }}
      />
      <Separator />

      <Card
        CardContent={{
          title: "Crea profili per i bambini",
          paragraf:
            "I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.",
          isImageRight: true,
          img: window.location.href + "/child.png",
        }}
      />
      <Separator />

      <Card
        CardContent={{
          title: "Scarica le tue serie da guardare offline",
          paragraf: "Disponibili solo nei piani senza pubblicità.",
          isImageRight: false,
          img: window.location.href + "/mobile-0819.jpg",
        }}
      />
      <Separator />
      <CardFaq />
      <Separator />
      <Footer />
    </>
  );
}

export default App;
