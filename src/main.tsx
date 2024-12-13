import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
