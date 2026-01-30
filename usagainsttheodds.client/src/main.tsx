import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import HomePage2 from './Pages/HomePage2.tsx';
import EndingGood from './Pages/Endings/EndingGood';
import EndingDrunk from './Pages/Endings/EndingDrunk';
import EndingHungry from './Pages/Endings/EndingHungry';
import EndingThirsty from './Pages/Endings/EndingThirsty';
import EndingBankrupt from './Pages/Endings/EndingBankrupt';
import EndingBreakup from './Pages/Endings/EndingBreakup';
import EndingNeutral from './Pages/Endings/EndingNeutral';

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
            <Route path="right" element={<HomePage2 />} />
          </Route>
          

          <Route path="foodbar" element={<FoodBar />} />
          <Route path="itemshop" element={<ItemShop/> } />

          {/* <Route path="wheel" element={<Wheel />} /> */}

          {/* STÁNKY */}
          <Route path='minigame'>

            <Route path="blackjack" element={<MinigameContainer id="blackjack" exitPage="/game/right"/>} />
            <Route path="russianroulette" element={<MinigameContainer id="russianroulette"exitPage="/game" devVersion={true} />} />
            {/* <Route path="testminigame" element={<MinigameContainer id="test" exitPage="/game" devVersion={true} />} /> */}
            <Route path="whackamole" element={<MinigameContainer id="whackamole" exitPage="/game/right" />} />
            <Route path="memorymatch" element={<MinigameContainer id="memorymatch" exitPage="/game/right" devVersion={true} />} />
            <Route path="slots" element={<MinigameContainer id="slots" exitPage="/game/right" devVersion={true}  />} />
            <Route path="darts" element={<MinigameContainer id="darts" exitPage='/game/right' devVersion={true}/>} />

          </Route>

          {/* Ending pages (individual routes) */}
          <Route path="ending">
            <Route index element={<EndingNeutral />} />
            <Route path="good" element={<EndingGood />} />
            <Route path="drunk" element={<EndingDrunk />} />
            <Route path="hungry" element={<EndingHungry />} />
            <Route path="thirsty" element={<EndingThirsty />} />
            <Route path="bankrupt" element={<EndingBankrupt />} />
            <Route path="breakup" element={<EndingBreakup />} />
            <Route path="neutral" element={<EndingNeutral />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
