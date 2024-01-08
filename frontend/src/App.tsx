import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import UserPage from "./pages/UserPage";
import AuthProvider from "./provider/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route element={<AuthProvider />}>
            <Route path='user-page' element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
