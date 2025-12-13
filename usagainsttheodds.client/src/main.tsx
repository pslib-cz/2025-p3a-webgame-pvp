import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Blackjack from './Pages/Minigames/Blackjack.tsx';
import RussianRulette from './Pages/Minigames/RussianRulette.tsx';
import NotFoundPage from './Pages/NotFoundPage.tsx';
import RootLayout from './RootLayout.tsx';
import HomePage from './Pages/HomePage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />

        {/* minihry */}
        <Route path="blackjack" element={<Blackjack />} />
        <Route path="russianroulette" element={<RussianRulette />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
