import React ,{useEffect,useContext} from 'react';
import "./App.css";
import { Context } from './main.jsx';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import Navbar from './Components/Layout/Navbar.jsx';
import Footer from './Components/Layout/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Job/Jobs.jsx';
import JobDetails from './Components/Job/JobDetails.jsx';
import MyJobs from './Components/Job/MyJobs.jsx';
import PostJob from './Components/Job/PostJob.jsx';
import Application from './Components/Application/Application.jsx';
import MyApplication from './Components/Application/MyApplication.jsx';
import NotFound from './Components/NotFound/NotFound.jsx'
import axios from "axios";
import  {Toaster} from "react-hot-toast";

// import ReactDOM from 'react-dom/client';
// import App from  './App.jsx';

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4008/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
