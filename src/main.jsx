import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/homepage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HomePage />
    <Footer/>
  </StrictMode>,
)
