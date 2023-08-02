import { Link } from "react-router-dom";

function ClientD() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Client_direct</h1>
      <div className="ClientD">
        <Link to="/">Client_d</Link>
        <Link to="/Pdg">Pdg</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    </>
  );
}

export default ClientD;
