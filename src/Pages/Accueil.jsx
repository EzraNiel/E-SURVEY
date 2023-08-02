import { Link } from "react-router-dom";

function Accueil() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Accueil</h1>
      <div className="Accueil">
        <Link to="/">Accueil</Link>
        <br />
        <Link to="/Adminstrator">Adminstrator</Link>
        <br />
        <Link to="/Apropos">Apropos</Link>
        <br />
        <Link to="/Client">Client</Link>
        <br />
        <Link to="/Contact">Contact</Link>
        <br />
        <Link to="/CreationDeFormulaire">CreationDeFormulaire</Link>
        <br />
        <Link to="/Enqueteur">Enqueteur</Link>
        <br />
        <Link to="/Motif">Motif</Link>
      </div>
    </>
  );
}

export default Accueil;
