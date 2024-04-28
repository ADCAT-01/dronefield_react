import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage } from './components/main/Mian';
import { LoginPage } from './components/login/Login';
import { ContentPage } from './components/main_content/Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Link href="/"><Banner /></Link> */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/maincontent" element={<ContentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
