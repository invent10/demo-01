import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DirectorMessage from './components/DirectorMessage';
import TodaySection from './components/TodaySection';
import NewsSection from './components/NewsSection';
import AcademicSections from './components/AcademicSections';
import MetricsPanel from './components/MetricsPanel';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <DirectorMessage />
        <TodaySection />
        <MetricsPanel />
        <AcademicSections />
        <UpcomingEvents />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;