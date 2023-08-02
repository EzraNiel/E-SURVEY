import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Administrator from "./Pages/Administrator";
import Apropos from "./Pages/Apropos";
import Client from "./Pages/Client";
import CompteClient from "./Pages/CompteClient";
import Contact from "./Pages/Contact";
import CreationDeFormulaire from "./Pages/CreationDeFormulaire";
import Enqueteur from "./Pages/Enqueteur";
import Motif from "./Pages/Motif";

function App() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil></Accueil>} />
          <Route path="/Contact" element={<Contact></Contact>} />
          <Route path="/Apropos" element={<Apropos></Apropos>} />
          <Route
            path="/Administrator"
            element={<Administrator></Administrator>}
          />
          <Route path="/Client" element={<Client></Client>} />
          <Route path="/Enqueteur" element={<Enqueteur></Enqueteur>} />
          <Route path="/Motif" element={<Motif></Motif>} />
          <Route path="/CompteClient" element={<CompteClient></CompteClient>} />
          <Route
            path="/CreationDeFormulaire"
            element={<CreationDeFormulaire></CreationDeFormulaire>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
