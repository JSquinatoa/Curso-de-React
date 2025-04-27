import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <HashRouter>
      <App />
    </HashRouter>

    {/*tambien puede ser BrowseRouter cualquiera de las dos opcioens es válida, pero esta necesita una confiracuón en el servidor normalmente*/}
  </StrictMode>
);
