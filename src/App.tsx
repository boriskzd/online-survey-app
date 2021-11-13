import { Counter } from './features/counter/Counter';

import SuccessPage from './views/SuccesPage';
import SurveyPage from './views/SurveyPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth='sm'>
        <Routes>
          <Route path='/' element={<SurveyPage />} />
          <Route path='success' element={<SuccessPage />} />
        </Routes>

        <Counter />
      </Container>
    </div>
  );
}

export default App;
