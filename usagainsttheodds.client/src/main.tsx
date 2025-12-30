import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage.tsx';
import RootLayout from './RootLayout.tsx';
import MainLayout from './MainLayout.tsx';
import HomePage from './Pages/HomePage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import MinigameContainer from './Components/Minigame/MinigameContainer.tsx';
import FoodBar from './Pages/FoodBar.tsx';
import StartPage from './Pages/StartPage.tsx'
import IntroCutscene from './Pages/Cutscene/IntroCutscene.tsx'
import { ErrorBoundary } from 'react-error-boundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>

          {/* START */}
          <Route index element={<StartPage />} />

          {/* CUTSCÉNY */}
          <Route path="cutscene">
            <Route path="intro" element={<IntroCutscene />} />
          </Route>

          {/* HRA */}
          <Route path="game" element={<MainLayout />}>
            <Route index element={<HomePage />} />


          </Route>

          {/* STÁNKY */}
          <Route path='stall'>

            <Route path="foodbar" element={<ErrorBoundary fallback={<><div>Error loading FoodBar</div><Link to="/game">Go Back</Link></>}><Suspense fallback={<div>Loading...</div>}><FoodBar /></Suspense></ErrorBoundary>} />

            <Route path="blackjack" element={<MinigameContainer id="blackjack" exitPage="/game" devVersion={true} />} />
            <Route path="russianroulette" element={<MinigameContainer id="russianroulette" devVersion={true} exitPage="/game" />} />
            <Route path="testminigame" element={<MinigameContainer id="test" exitPage="/game" devVersion={true} />} />
            <Route path="whackamole" element={<MinigameContainer id="whackamole" exitPage="/game" devVersion={true} />} />

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
