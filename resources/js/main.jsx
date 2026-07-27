import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'

createRoot(document.getElementById('ai-observatory')).render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>,
)
