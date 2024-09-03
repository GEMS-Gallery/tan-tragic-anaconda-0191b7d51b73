import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { backend } from 'declarations/backend';
import { CircularProgress } from '@mui/material';

const Header = () => (
  <header className="bg-red-900 p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="btn">Home</Link></li>
        <li><Link to="/game" className="btn">Play DOOM</Link></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-red-900 p-4 mt-8 text-center">
    <p>&copy; 2024 DOOM Fanpage. All rights reserved.</p>
  </footer>
);

const Home = () => {
  const [history, setHistory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await backend.getGameHistory();
        setHistory(result);
      } catch (error) {
        console.error('Error fetching game history:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the DOOM Fanpage</h1>
      <img
        src="https://images.unsplash.com/photo-1555864326-5cf22ef123cf?ixid=M3w2MzIxNTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUzNjYxNDN8&ixlib=rb-4.0.3"
        alt="Retro gaming"
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="mb-2">Image by <a href="https://unsplash.com/photos/white-nintendo-game-boy-lUbIun4IL38" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Unsplash</a></p>
      <h2 className="text-2xl font-bold mb-4">DOOM History</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress className="loading-spinner" />
        </div>
      ) : (
        <p className="mb-4">{history}</p>
      )}
    </div>
  );
};

const Game = () => (
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-4">Play DOOM</h1>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://midzer.de/wasm/doom/"
        title="DOOM Game"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow py-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
