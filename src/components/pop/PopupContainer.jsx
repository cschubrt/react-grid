import { useRef, useEffect, useContext, useState } from "react";
import { usePopCtx } from "./PopContext";
import "./popup.css";

export default function PopupContainer(props) {
  const divRef = useRef(null);
  const [Doc, setDoc] = useState(null);
  const { mod, close } = usePopCtx();
  // Handle click outside of popup
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
    import(mod)
      .then((modd) => {
        if (mounted) setDoc(() => modd.default);
      })
      .catch((err) => {
        console.error("Failed to load popup module:", err);
      });
    return () => {
      mounted = false;
    };
  }, [Doc, setDoc]);

  return (
    <div className="popup">
      <div ref={divRef} className="popup-inner">
        {Doc ? <Doc /> : null}
        <button type="button" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}
