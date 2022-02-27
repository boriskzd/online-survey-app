// import { Counter } from './features/counter/Counter';

import SuccessPage from './views/SuccesPage';
import SurveyPage from './views/SurveyPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  console.log('[App.js] Render');
  return (
    <div>
      <Navbar />
      <Container maxWidth='sm' sx={{ paddingTop: 2 }}>
        <Routes>
          <Route path='/' element={<SurveyPage />} />
          <Route path='success' element={<SuccessPage />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404</p>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

        {/* <Counter /> */}
      </Container>
    </div>
  );
}

export default App;
