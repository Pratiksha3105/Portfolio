'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <main className="animated-gradient-bg grid-overlay min-h-screen">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
