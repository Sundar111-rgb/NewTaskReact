import './App.css';

import MiniDrawer from './MiniDrawer';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Jobs from './Jobs';
import CustomDrawer from './CustomDrawer';

import Introduction from './pages/Introduction';
import ResumeCV from './pages/ResumeCV';
import Projects from './pages/Projects';
import CodeSamples from './pages/CodeSamples';
import SkillsTechnologies from './pages/SkillsTechnologies';
import ProfessionalExperience from './pages/ProfessionalExperience';
import EducationCertificate from './pages/EducationCertificate';
import ContactInformation from './pages/ContactInformation';
import TechnicalPosts from './pages/TechnicalPosts';

function App() {
  return (
      <BrowserRouter>
        <CustomDrawer />
        <Routes>
          <Route path="/Introduction and About Me" element={<Introduction />} />
          <Route path="/Resume/CV" element={<ResumeCV />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Code Samples" element={<CodeSamples />} />
          <Route path="/Skills and Technologies" element={<SkillsTechnologies />} />
          <Route path="/Professional Experience" element={<ProfessionalExperience />} />
          <Route path="/Education and Certifications" element={<EducationCertificate />} />
          <Route path="/Contact Information" element={<ContactInformation />} />
          <Route path="/Technical Posts" element={<TechnicalPosts />} />
        </Routes>
      </BrowserRouter> 
    
  );
}

export default App;
