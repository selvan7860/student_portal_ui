import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './components/pages/Home';
import WelcomePage from './components/WelcomePage/WelcomePage';
import SlideNav from './components/SlideNav/SlideNav';
import InternalMark from './components/InternalMark/InternalMark';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<WelcomePage />}></Route>
        <Route path="/Login" exact element={<LoginPage/>}></Route>
        <Route path="/Signup" exact element={<SignUpPage />}></Route>
        <Route path="/internalMark"  element={<InternalMark />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
