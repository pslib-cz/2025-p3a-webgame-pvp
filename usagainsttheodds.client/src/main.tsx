import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import NotFoundPage from './Pages/NotFoundPage.tsx';
import RootLayout from './RootLayout.tsx';
import MainLayout from './MainLayout.tsx';
import HomePage from './Pages/HomePage1.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import MinigameContainer from './Components/Minigame/MinigameContainer.tsx';
import FoodBar from './Pages/FoodBar.tsx';
import StartPage from './Pages/StartPage.tsx'
import IntroCutscene from './Pages/Cutscene/IntroCutscene.tsx'
import ItemShop from './Pages/ItemShop.tsx';
import Wheel from './Pages/Cutscene/Wheel.tsx';
import HomePage2 from './Pages/HomePage2.tsx';
import HomePage1 from './Pages/HomePage1.tsx';

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
            <Route path="left" element={<HomePage2 />} />
          </Route>

          {/* STÁNKY */}
          <Route path='stall'>

          <Route path="foodbar" element={<FoodBar />} />
          <Route path="itemshop" element={<ItemShop/> } />

            <Route path="blackjack" element={<MinigameContainer id="blackjack" exitPage="/game/left" devVersion={true} />} />
            <Route path="russianroulette" element={<MinigameContainer id="russianroulette"exitPage="/game" devVersion={true} />} />
            <Route path="testminigame" element={<MinigameContainer id="test" exitPage="/game" devVersion={true} />} />
            <Route path="whackamole" element={<MinigameContainer id="whackamole" exitPage="/game/left" devVersion={true} />} />
            <Route path="slots" element={<MinigameContainer id="slots" exitPage="/game/left" devVersion={true}  />} />
            {/* <Route path="wheel" element={<Wheel />} /> */}

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
