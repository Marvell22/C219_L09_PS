import { Routes, Route } from "react-router-dom";
import './index.css'; // Import your styles

import Header from "./components/Header";
import Diplomas from "./components/Diplomas";
import Modules from "./components/Modules";
import ModuleDetails from "./components/ModuleDetails";
import RegistrationForm from "./components/RegistrationForm";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <Header />
      
      {/* Main Routes and Content */}
      <Routes>
        <Route path="/" element={<h1>Welcome to Republic Polytechnic Course Enrollment Portal</h1>} />
        <Route path="Diplomas" element={<Diplomas />} />
        <Route path="Diplomas/:diplomaId" element={<Modules />} />
        <Route path="Diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />
        <Route path="Register" element={<RegistrationForm />} />
        <Route path="Confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
      
      {/* Footer Section */}
      <footer className="container">
        &copy;2022 | <a href="https://www.republic.edu.sg/">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
