import { Link } from "react-router-dom";

function Client() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Motif de sondage</h1>
      <div className="ClientD">
        <Link to="/">Accueil</Link>
      </div>
    </>
  );
}

export default Client;
