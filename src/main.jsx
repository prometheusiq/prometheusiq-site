+ import './index.css';   // ← loads your Tailwind directivesimport React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Your top-level “App” component
import App from './PrometheusIQWebsite.jsx';

// Make sure these match the exact folder name: “Pages”
import About     from './Pages/About.jsx';
import Services  from './Pages/Services.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact   from './Pages/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<App />} />
        <Route path="/about"     element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact"   element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
