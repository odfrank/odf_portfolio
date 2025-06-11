import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ODF Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to your React portfolio!
            </p>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-700">
                🚀 Your app is running successfully!
              </p>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
