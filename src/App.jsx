import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./components/AnimeItem";
import Gallery from "./components/Gallery";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#101010",
        }}
      >
        Akashic records of Anime
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:id" element={<AnimeItem />} />
          <Route path="/character/:id" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
