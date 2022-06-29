import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

/**
 *
 * @returns {HTMLElement} the home page
 */
function Home() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Footer />
        <main className="landing-home">
          <div>
            <h4>Quel utilisateur êtes-vous ?</h4>
            <Link to="/user/12" className="link">
              <p>Karl Dovineau</p>
            </Link>
            <Link to="/user/18" className="link">
              <p>Cecilia Ratorez</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
