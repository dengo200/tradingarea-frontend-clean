
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'https://tradingarea-backend.onrender.com/api';

function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/offers`).then(res => {
      setOffers(res.data);
    }).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔫 Skin-Marktplatz</h1>
      <ul>
        {offers.map((offer, idx) => (
          <li key={idx} className="border rounded p-2 mb-2">
            <p><strong>Item:</strong> {offer.item}</p>
            <p><strong>Von:</strong> {offer.user}</p>
            <a
              href={`https://steamcommunity.com/tradeoffer/new/?partner=${offer.partnerId}&token=${offer.token}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Jetzt handeln
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Login() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">🔐 Steam Login</h1>
      <a
        href="https://tradingarea-backend.onrender.com/auth/steam"
        className="bg-blue-600 text-white px-4 py-2 mt-4 inline-block rounded"
      >
        Login mit Steam
      </a>
    </div>
  );
}

function NotFound() {
  return <div className="p-4 text-red-600">404 – Seite nicht gefunden</div>;
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/">🏠 Start</Link>
          <Link to="/login">🔐 Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
