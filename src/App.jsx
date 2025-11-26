import { useState } from "react";
import Popup from "./components/pop/PopupContainer";
import { ContextCreate, PopProvider } from "./components/pop/PopupCreate";
import "./assets/css/App.css";

function App() {
  const [content, setContent] = useState();
  const ctx = ContextCreate(content);

  const handleClick = (e) => {
    e.preventDefault();
    setContent(e.target.dataset.content);
    ctx.open();
  };

  return (
    <>
      <PopProvider.Provider value={ctx}>
        {ctx.pop ? <Popup toggle={ctx.toggle} mod={ctx.mod} /> : null}
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
            <h2>Current Popup Content: {content}</h2>
            <button type="button" onClick={handleClick} data-content="default">
              Show Default
            </button>
            <button type="button" onClick={handleClick} data-content="copy">
              Show Copy
            </button>
          </main>
          <footer className="footer"> Footer </footer>
        </div>
      </PopProvider.Provider>
    </>
  );
}

export default App;
