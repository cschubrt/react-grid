import { useState, useEffect } from "react";
import Popup from "./components/pop/PopupContainer";
import { ContextCreate, PopProvider } from "./components/pop/PopupCreate";
import "./assets/css/App.css";

function App() {
  const [content, setContent] = useState();
  const [posts, setPosts] = useState();
  const ctx = ContextCreate(content);
  // Stock Market API
  const api = "http://api.marketstack.com/v2/eod?access_key=3503fba5dba20918b6c292eed11ecb0f&symbols=AAPL&limit=5";

  // Handle Popup Click
  const handleClick = (e) => {
    e.preventDefault();
    setContent(e.target.dataset.content);
    ctx.open();
  };

  // Fetch API Data
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // display API Data
  const showPosts = (post) => {
    if (post) {
      return post.data.map((item, i) => (
        <div key={i} className="api-data">
          <div>{item.name}</div>
          <div>{new Date(item.date).toLocaleString()}</div>
          <div>${item.open}</div>
          <div>${item.high}</div>
          <div>${item.low}</div>
          <div>${item.close}</div>
        </div>
      ));
    }
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
            <h1>Current Popup Content: {content}</h1>
            <button type="button" onClick={handleClick} data-content="default">
              Show Default
            </button>
            <button type="button" onClick={handleClick} data-content="copy">
              Show Copy
            </button>
            <h2>API Data:</h2>
            {showPosts(posts)}
          </main>
          <footer className="footer"> Footer </footer>
        </div>
      </PopProvider.Provider>
    </>
  );
}

export default App;
