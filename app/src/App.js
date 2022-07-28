import React,{useState,Suspense} from 'react';
import './styles/app.scss';

import {  BrowserRouter,
          Routes,
          Route,
          Navigate,
          Outlet  } from "react-router-dom";

import { ErrorBoundary } from 'react-error-boundary'
import { ErrorHandler } from './Components/ErrorHandler/ErrorHandler';

import HeaderLayding from './Components/Header/HeaderLayding/HeaderLanding';
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
import NotFound from './Components/NotFound/NotFound';
import Company from './Pages/User/Company/Company';
import Search from './Pages/User/Search/Search';
import Messaging from './Pages/User/Messaging/Messaging';
import Messenger from './Components/Messenger/Messenger';
import Event from './Pages/User/Event/Event';
import University from './Pages/User/University/University';
import Skils from './Pages/User/Skils/Skils';
import Spinner from './Components/Spinner/Spinner';
import Admin from './Pages/Admin/Admin';
import CreateCompany from './Pages/User/CreateCompany/CreateCompany';
import CreateLesson from './Pages/User/CreateLesson/CreateLesson';
import CreateUniversity from './Pages/User/CreateUniversity/CreateUniversity';
import CreateVacancies from './Pages/User/CreateVacancies/CreateVacancies';
import VacanciesItem from './Pages/User/VacanciesItem/VacanciesItem';
import LearningItem from './Pages/User/LearningItem/LearningItem'

function App() {

  const [logined,setLogined] = useState(true);
  const [roleAdmin,setRoleAdmin] = useState(false);

  const PublicRoute = () => {
    return logined ? <Navigate to="/index" /> :<Outlet />;
  }

  const PrivateRoute = () => {
    return logined ? <Outlet /> : <Navigate to="/" />;
  }

  const PrivetRouteAdmin = () => {
    return logined && roleAdmin ? <Outlet/> : <Navigate to="/" />
  }

  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <BrowserRouter>
          {
            logined ? <HeaderUser logined={logined}/> : <HeaderLayding logined={logined}/>
          }
          <main className="main">
            <Suspense fallback={<Spinner/>}>
              <Routes>      
                <Route exact path='/' element={<PublicRoute/>}>
                  <Route exact path="/" element={<Landing/>}/>        
                  <Route path="/login" element={<Login/>} />
                  <Route path="/registration" element={<Registration/>} />
                </Route>

                <Route exact path="/" element={<PrivateRoute/>}>
                  <Route index path="/index" element={<Feed/>} />
                  <Route path="/network" element={<Network />} />
                  <Route path="/notification" element={<Notifications />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/vacancies" element={<Vacancies />} />
                  <Route path="/createvacancies" element={<CreateVacancies/>}/>
                  <Route path="/vacancie/:id" element={<VacanciesItem />} />
                  <Route path="/learning" element={<Learning />} />
                  <Route path="/learning/:id" element={<LearningItem />} />
                  <Route path="/createlesson" element={<CreateLesson />}/>
                  <Route path="/company/:id" element={<Company />} />
                  <Route path="/createcompany" element={<CreateCompany/>}/>
                  <Route path="/search" element={<Search />} />
                  <Route path="/messaging" element={<Messaging />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/university" element={<University />} />
                  <Route path="/createuniversity" element={<CreateUniversity/>} />
                  <Route path="/skils" element={<Skils />}/>
                </Route>

                <Route path="/" exact element={<PrivetRouteAdmin/>}>
                  <Route path="admin" element={<Admin/>} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          {
            logined ? <Messenger/> : null 
          }
          <Footer/>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;



