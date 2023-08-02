import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import ClientD from "./Pages/ClientD";
import Pdg from "./Pages/Pdg";

function App() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientD></ClientD>} />
          <Route path="/Pdg" element={<Pdg></Pdg>} />
          <Route path="/Admin" element={<Admin></Admin>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
