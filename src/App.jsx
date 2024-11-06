
import './styles.css';


import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import Nav from './components/Nav';

export default function App() {
    return (
        <>
        <div className='App'>
        <Nav />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/price/:symbol" element={<Price />} />
            <Route path="/currencies" element={<Currencies />} />
        </Routes>
        </div>
        </>
        
    )
}