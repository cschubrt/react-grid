import { useRef, useEffect, useContext, useState } from "react";
import PopContext from "./PopContext";
import "./popup.css";

export default function PopupContainer(props) {
  const modRef = props.mod;
  const divRef = useRef(null);
  const ctx = useContext(PopContext);
  const [Content, setContent] = useState(null);
  if (!ctx || typeof ctx.setPop !== "function") {
    throw new Error("Error:", ctx);
  }
  const close = () => ctx.setPop(false);

  const handleBoundary = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      close();
    }
  };

  // Attach listener for click outside of div
  useEffect(() => {
    document.addEventListener("mousedown", handleBoundary);
    return () => {
      document.removeEventListener("mousedown", handleBoundary);
    };
  }, []);

  // Dynamically load the module after mount
  useEffect(() => {
    let mounted = true;
    import(modRef)
      .then((mod) => {
        if (mounted) setContent(() => mod.default);
      })
      .catch((err) => {
        console.error("Failed to load popup module:", err);
      });
    return () => {
      mounted = false;
    };
  }, [modRef]);

  return (
    <div className="popup">
      <div ref={divRef} className="popup-inner">
        {Content ? <Content /> : null}
        <button type="button" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}
