import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
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
import Ending from './Pages/Ending/Ending.tsx';
import Wheel from './Pages/Cutscene/Wheel.tsx'; 
import { SoundProvider } from './Providers/SoundProvider.tsx';
import NotificationList from './Components/Notifications/NotificationList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoundProvider>
    <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Routes>
        <Route path="/" element={<RootLayout />}>

          <Route path='/notificationTest' element={<NotificationList />} />


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
          <Route path="wheel" element={<Wheel />} />
          

          <Route path="minigame">
              <Route path=":id" element={<MinigameContainer />} />
          </Route>
          
          <Route path="ending" element={<Ending />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
    </SoundProvider>
  </StrictMode>
)
