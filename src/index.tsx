import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wy8yfp8mxocgn1yc.us.auth0.com"
      clientId="158FTWHyXzpbAzO06BVrHHuUXJvUCALR"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <BrowserRouter> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </BrowserRouter> */}
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
