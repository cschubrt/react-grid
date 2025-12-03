import { useState, useEffect } from "react";
import Popup from "./components/pop/PopupContainer";
import { usePopCtx } from "./components/pop/PopContext";
import Navigation from "./components/navigation.jsx";
import Logo from "./assets/react.svg";
import "./assets/css/App.css";

function App() {
  const { content, setContent, open, toggle, pop, mod } = usePopCtx();
  const [posts, setPosts] = useState();
  // Stock Market API
  const api = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  // Handle Popup Click
  const handleClick = (e) => {
    e.preventDefault();
    setContent(e.target.dataset.content);
    open();
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
      return post.map((item, i) => (
        <div key={i} className="api-data">
          <div>
            <span>{item.id}</span> {item.title}
          </div>
          <div>{item.body}</div>
        </div>
      ));
    }
  };

  return (
    <>
      {pop ? <Popup toggle={toggle} mod={mod} /> : null}
      <div id="container">
        <header>
          <img src={Logo} className="app-logo" alt="logo" />
        </header>
        <Navigation onClick={handleClick} />
        <main>
          <h1>Current Popup Content: {content}</h1>
          <button type="button" onClick={handleClick} data-content="default">
            Show Default
          </button>
          <button type="button" onClick={handleClick} data-content="copy">
            Show Copy
          </button>
          <h3>API Stock Data:</h3>
          {posts ? showPosts(posts) : "Loading..."}
        </main>
        <footer className="footer"> Footer </footer>
      </div>
    </>
  );
}

export default App;
