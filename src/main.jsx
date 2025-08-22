import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";

localStorage.clear();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)