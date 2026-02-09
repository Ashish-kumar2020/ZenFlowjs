import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import { Toaster } from "./components/ui/sonner";

const clientId =
  "618417567496-vd6j8hgjb60nkfv19eqv6vbi3ems65eu.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Toaster position="top-center" duration={5000} />
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
