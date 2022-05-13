import React from 'react';
import {  BrowserRouter,Routes,Route,} from "react-router-dom";
import './app.scss';

//import Header from './Components/Header/HeaderLayding/Header';
import Landing from './Pages/Landing/Landing';
import Feed from './Pages/User/Feed/Feed';
import Notifications from './Pages/User/Notifications/Notifications';
import Network from './Pages/User/Network/Network';
import HeaderUser from './Components/Header/HeaderUser/HeaderUser';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Profile from './Pages/User/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Vacancies from './Pages/User/Vacancies/Vacancies';
import Learning from './Pages/User/Learning/Learning';
import VacanciesItem from './Pages/User/Vacancies/VacanciesItem/VacanciesItem';
import NotFound from './Components/NotFound/NotFound';
import LearningItem from './Pages/User/Learning/LearningItem/LearningItem';
import Company from './Pages/User/Company/Company';



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <HeaderUser/>
        <main className='main'>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
      
            <Route index path="/index" element={<Feed/>} />
            <Route path="/network" element={<Network />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/item" element={<VacanciesItem />} />

            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/item" element={<LearningItem />} />

            <Route path="/company" element={<Company />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
