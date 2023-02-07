import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/skills' element={<SkillsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>   
          <Route path='/contact' element={<ContactPage/>}/>   
        </Routes>
        <div className='footer_div'>
          <FooterComponent />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
