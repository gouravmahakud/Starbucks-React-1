import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/StarBg";

function App() {
  return (
    <div className="font-default">
      <NavBar />
      <Header />
      <HeroSection />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
