import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'https://tradingarea.onrender.com/api'; // Dein Backend-Endpunkt

function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/offers`)
      .then(res => setOffers(res.data))
      .catch(() => setOffers([]));
  }, []);

  return (
    <div className="container">
      <h2>Marktplatz</h2>
      {offers.length === 0 ? (
        <p>Keine Angebote gefunden.</p>
      ) : (
        <ul>
          {offers.map((offer, idx) => (
            <li key={idx}>{offer.name} – {offer.price} Coins</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Login() {
  return (
    <div className="container">
      <h2>Steam Login</h2>
      <a href="https://tradingarea.onrender.com/auth/steam">
