import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Chat from './pages/Chat';
import Chat1 from './pages/Chat1';
import Chat2 from './pages/Chat2';
import Chat3 from './pages/Chat3';
import Chat4 from './pages/Chat4';
import Chat5 from './pages/Chat5';
import Chat6 from './pages/Chat6';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Post from './pages/Post';
import Find from './pages/Find';
import Login from './pages/Login';
import Register from './pages/Register';
import Complete from './pages/Complete';
import Confirm from './pages/Confirm';
import About from './pages/About';
import LoginFrench from './pages/LoginFrench';
function App() {
  return (
    <>
      <Navbar className="m-auto" />
      <Routes>
        <Route path="/uidesignfinal" element={<Home />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/chat1" element={<Chat1 />} />
        <Route path="/chat2" element={<Chat2 />} />
        <Route path="/chat3" element={<Chat3 />} />
        <Route path="/chat4" element={<Chat4 />} />
        <Route path="/chat5" element={<Chat5 />} />
        <Route path="/chat6" element={<Chat6 />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/find" element={<Find />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginf" element={<LoginFrench />} />
      </Routes>
    </>
  );
}

export default App;
