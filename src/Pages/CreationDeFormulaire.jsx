import { Link } from "react-router-dom";

function Admin() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Création de formulaire</h1>
      <div className="Admin">
        <Link to="/">Client_d</Link>
        <Link to="/Pdg">Pdg</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    </>
  );
}

export default Admin;
