import Layout from "../src/components/Layout.tsx";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/themeContext.tsx";

// Lazy load components
const HomePage = lazy(() => import("./pages/homePage"));
const CommunitySupport = lazy(() => import("./pages/communitySupportPage"));
const ProgramsAndServicesPage = lazy(() => import("./pages/programsPage"));
const ContactUs = lazy(() => import("./pages/contactUsPage"));
const EducationResource = lazy(() => import("@/pages/educationResourcesPage"));
const AboutUs = lazy(() => import("@/pages/aboutUsPage"));

export default function App() {
  return (
    <ThemeProvider>
    <Router>
      <Layout>
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community-support" element={<CommunitySupport />} />
            <Route path="/programs" element={<ProgramsAndServicesPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/education-resources" element={<EducationResource />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}
