import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className={"main-container"}>
      <Navbar />
      <MainContent />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
