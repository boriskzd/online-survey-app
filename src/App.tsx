import { Counter } from './features/counter/Counter';

import SuccessPage from './views/SuccesPage';
import SurveyPage from './views/SurveyPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SurveyPage />} />
        <Route path='success' element={<SuccessPage />} />
      </Routes>
      <Counter />
    </div>
  );
}

export default App;
