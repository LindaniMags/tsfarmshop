import "./App.css";
import { TopSec } from "./components/TopSec";
import { ThirdSec } from "./components/ThirdSec";
import { Footer } from "./components/Footer";
import { Images } from "./components/Images";
import { Advert } from "./components/Advert";

function App() {
  return (
    <div className="App">
      <TopSec />
      <Images />
      <ThirdSec />
      <Advert />
      <Footer />
    </div>
  );
}

export default App;
