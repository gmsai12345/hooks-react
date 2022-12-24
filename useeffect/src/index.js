import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App4 from "./App4";
import App from "./App";
import App5 from "./App5";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";
import App10 from "./App10";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App4 />
    <App5 />
    <App7 />
    <App8 />
    <App9 />
    <App10 />
  </StrictMode>
);
