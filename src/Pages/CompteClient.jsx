import { Link } from "react-router-dom";

function CompteClient() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Enqueteo</h1>
      <div className="ClientD">
        <Link to="/">Acceuil</Link>
      </div>
    </>
  );
}

export default CompteClient;
