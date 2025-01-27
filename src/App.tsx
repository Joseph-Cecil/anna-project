import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage";
import { CommunitySupport } from "./pages/communitySupportPage";
import { ProgramsAndServicesPage } from "./pages/programsPage";
import { ContactUs } from "./pages/contactUsPage";
import { EducationResource } from "./pages/educationResourcesPage";

 
export default function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/community-support" element={<CommunitySupport/>}/>
    <Route path="/programs" element={<ProgramsAndServicesPage/>}/>
    <Route path="/contact-us" element={<ContactUs/>}/>
    <Route path="/education-resources" element={<EducationResource/>}/>
    </Routes>
    </Router>
    </>
  )
}