import { useState } from "react";
import "./assets/css/App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
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
        <button onClick={() => setCount((count) => count + 1)}> {" "} count is {count}
        </button>
      </main>
      <footer className="footer"> Footer </footer>
    </div>
  );
}

export default App;
