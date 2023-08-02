import { Link } from "react-router-dom";

function Contact() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Contact</h1>
      <div className="ClientD">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">Apropos</Link>
      </div>
    </>
  );
}

export default Contact;
