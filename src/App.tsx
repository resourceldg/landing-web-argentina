import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomeLanding from './landings/HomeLanding';
import ProfesionalesLanding from './landings/ProfesionalesLanding';
import RegaloLanding from './landings/RegaloLanding';
import InstagramWebLanding from './landings/InstagramWebLanding';
import WhatsAppLanding from './landings/WhatsAppLanding';
import PrecioLanding from './landings/PrecioLanding';
import PsicologaExample from './ejemplos/PsicologaExample';
import NutricionistaExample from './ejemplos/NutricionistaExample';
import AbogadoExample from './ejemplos/AbogadoExample';
import DermatologaExample from './ejemplos/DermatologaExample';
import ContadorExample from './ejemplos/ContadorExample';
import CoachExample from './ejemplos/CoachExample';
import EjemplosPage from './ejemplos/EjemplosPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/profesionales" element={<ProfesionalesLanding />} />
        <Route path="/regalo" element={<RegaloLanding />} />
        <Route path="/instagram-a-web" element={<InstagramWebLanding />} />
        <Route path="/whatsapp" element={<WhatsAppLanding />} />
        <Route path="/web-50k" element={<PrecioLanding />} />
        <Route path="/ejemplo/psicologa" element={<PsicologaExample />} />
        <Route path="/ejemplo/nutricionista" element={<NutricionistaExample />} />
        <Route path="/ejemplo/abogado" element={<AbogadoExample />} />
        <Route path="/ejemplo/dermatologa" element={<DermatologaExample />} />
        <Route path="/ejemplo/contador" element={<ContadorExample />} />
        <Route path="/ejemplo/coach" element={<CoachExample />} />
        <Route path="/ejemplos" element={<EjemplosPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
