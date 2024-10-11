import Contact from "./components/Contact/Contact";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NavBar from "./components/NavBar/NavBar";
import Prices from "./components/Prices/Prices";

function App() {
  return (
    <div>
      <NavBar />
      <HomeScreen />
      <Prices />
      <Feedback />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
