import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header';
import Homepage from './Hompage';
// import Footer from './Footer';
import Projects from './Projects';
import Menu from './Menu';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/menu/projects" element={<Projects></Projects>}></Route>
        <Route path="/menu/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/menu/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
