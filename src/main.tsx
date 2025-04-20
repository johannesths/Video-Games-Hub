/**
 * main.tsx
 *
 * Entry point of the application.
 *
 * - Initializes the React app using React 18's 'createRoot' API.
 * - Wraps the entire app in React’s 'StrictMode' for highlighting potential issues during development.
 * - Applies global styles from 'index.css'.
 * - Wraps the app with a custom 'Provider' component which includes theme.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
