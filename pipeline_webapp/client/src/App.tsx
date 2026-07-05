import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Editor from './pages/Editor';
import Simulator from './pages/Simulator';
import { TextProvider } from './context/TextContext';
import { ToggleProvider } from './context/ToggleContext';
import { motion } from 'framer-motion';
export default function App() {
  return (
    <TextProvider>
      <ToggleProvider>
        <Navbar />
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className='max-w-7xl mx-auto px-6 py-10'
>

        <Routes>
          <Route path='/' element={<Editor />} />
          <Route path='/simulator' element={<Simulator />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        </motion.div>
      </ToggleProvider>
    </TextProvider>
    
  );
}
