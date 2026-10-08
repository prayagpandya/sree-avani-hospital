import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollManager } from './components/ScrollManager';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { DoctorPage } from './pages/DoctorPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { LegalPage } from './pages/LegalPage';
import { NotFound } from './pages/NotFound';

interface AppProps {
  /**
   * Patient stories currently hold consent placeholders. Turn this off to hide
   * the section entirely until approved testimonials are supplied.
   */
  showPatientStories?: boolean;
}

export function App({ showPatientStories = true }: AppProps) {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen w-full flex-col bg-ivory">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home showPatientStories={showPatientStories} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/book-appointment" element={<AppointmentPage />} />
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>);

}