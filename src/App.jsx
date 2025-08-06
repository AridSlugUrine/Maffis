import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import HomePage from './Pages/HomePage';
import NewCreationsPage from './Components/Page1NewCreations.jsx';
import BestSellersPage from './Components/Page2BestSellers.jsx';
import DiscountsPage from './Components/Page4Discounts.jsx';
import SeasonalPage from './Components/Page3Sweets.jsx';
import WeddingPage from './Components/Page5Wedding.jsx';
import BirthdayPage from './Components/Page6Birthday.jsx';
import SpecialsPage from './Components/Page7Specials.jsx';
import BeveragesPage from './Components/Page8Beverages.jsx';
import About from './Components/About.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/new-creations" element={<NewCreationsPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/sweets" element={<SeasonalPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
        <Route path="/beverages" element={<BeveragesPage />} />
      </Routes>
    </Router>
  );
};

export default App;

