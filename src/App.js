import React from 'react';
import {  BrowserRouter,Routes,Route,} from "react-router-dom";
import './app.scss';

//import Header from './Components/Header/HeaderLayding/Header';
import Landing from './Components/Landing/Landing';
import FeedPage from './Components/User/FeedPage/FeedPage';
import NotificationPage from './Components/User/NotificationPage/NotificationPage';
import NetworkPage from './Components/User/NetworkPage/NetworkPage';
import HeaderUser from './Components/Header/HeaderUser/HeaderUser';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import ProfilePage from './Components/User/ProfilePage/ProfilePage';

import Footer from './Components/Footer/Footer';
import VacanciesPage from './Components/User/VacanciesPage/VacanciesPage';




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
          </Routes>
          <Routes>
            <Route path="index" element={<FeedPage/>} />
            <Route path="network" element={<NetworkPage />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="vacancies" element={<VacanciesPage />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
