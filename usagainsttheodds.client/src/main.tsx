import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage.tsx';
import RootLayout from './RootLayout.tsx';
import HomePage from './Pages/HomePage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import MinigameContainer from './Components/Minigame/MinigameContainer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />

          {/* minihry */}
          <Route path="blackjack" element={<MinigameContainer id='blackjack' exitPage="/" />} />
          <Route path="russianroulette" element={<MinigameContainer id='russianrulette' exitPage="/" />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
