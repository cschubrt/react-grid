import { useState } from "react";
import Popup from "./components/pop/PopupContainer";
import PopContext from "./components/pop/PopContext";
import { PopupCreate } from "./components/PopupCreate";
import "./assets/css/App.css";

export const PopProvider = PopContext;

function App() {
  const [pop, setPop] = useState(false);

  // Toggle popup
  function togglePop() {
    setPop((p) => !p);
  }

  // Context value
  const contextValue = {
    pop,
    setPop,
    mod: './content/' + "default.jsx",
    open: () => setPop(true),
    close: () => setPop(false),
    toggle: togglePop,
  };

  return (
    <PopProvider.Provider value={contextValue}>
      {/* mod prop used to specify the popup component, outside context. */}
      { <PopupCreate mod={contextValue.mod} /> }
      {pop ? <Popup toggle={togglePop} mod={contextValue.mod} /> : null}
      <div id="container">
        <header> Header </header>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <button type="button" onClick={togglePop}>
            {" "}
            Show Popup
          </button>
        </main>
        <footer className="footer"> Footer </footer>
      </div>
    </PopProvider.Provider>
  );
}

export default App;
