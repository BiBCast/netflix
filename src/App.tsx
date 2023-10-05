import { Card } from "./components/Card";
import { CardFaq } from "./components/CardFaq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Home />
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
