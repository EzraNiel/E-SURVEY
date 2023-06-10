import { Link } from "react-router-dom";

function Client_d() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Client_direct</h1>
      <div className="Client_d">
        <Link to="/">Client_d</Link>
        <Link to="/Pdg">Pdg</Link>
        <Link to="/Admin">Admin</Link>
      </div>
    </>
  );
}

export default Client_d;
