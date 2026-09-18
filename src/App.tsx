import { Routes, Route } from 'react-router-dom';
import { SiteChrome } from './components/SiteChrome';
import { HomeScreen } from './pages/HomeScreen';
import { HowItWorksScreen } from './pages/HowItWorksScreen';
import { AboutScreen } from './pages/AboutScreen';
import { PilotScreen } from './pages/PilotScreen';

export default function App() {
  return (
    <SiteChrome>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/how-it-works" element={<HowItWorksScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/pilot" element={<PilotScreen />} />
      </Routes>
    </SiteChrome>
  );
}
