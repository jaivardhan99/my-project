import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutDashboard, PieChart, Target, BookOpen, Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Goals from './pages/Goals';
import Learn from './pages/Learn';
import ChatBot from './pages/ChatBot';
import GeminiChatBot from './pages/GeminiChatBot';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Portfolio', href: '/portfolio', icon: PieChart },
  { name: 'Goals', href: '/goals', icon: Target },
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Settings', href: '/settings', icon: Settings },
 
  {name:'GeminiChatBot',href:'/geminiChatBot',icon:Target}
];

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar navigation={navigation} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/settings" element={<Settings />} />
            
            <Route path="/GeminiChatBot" element={<GeminiChatBot/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;