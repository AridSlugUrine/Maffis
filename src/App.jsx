import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewCreationsPage from './Pages/Page1NewCreations.jsx';
import BestSellersPage from './Pages/Page2BestSellers.jsx';
import DiscountsPage from './Pages/Page4Discounts.jsx';
import SeasonalPage from './Pages/Page3Sweets.jsx';
import WeddingPage from './Pages/Page5Wedding.jsx';
import BirthdayPage from './Pages/Page6Birthday.jsx';
import SpecialsPage from './Pages/Page7Specials.jsx';
import BeveragesPage from './Pages/Page8Beverages.jsx';
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

