import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './Hompage';
import Footer from './Footer';
import Projects from './Projects';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
