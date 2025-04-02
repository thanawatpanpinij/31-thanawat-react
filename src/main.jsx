// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserDataProvider } from "./context/UserDataProvider.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <UserDataProvider>
        <App />
    </UserDataProvider>
    // </StrictMode>,
);
