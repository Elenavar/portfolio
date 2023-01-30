import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header';
import Homepage from './Hompage';
// import Footer from './Footer';
import Projects from './Projects';
import Menu from './Menu';

function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/menu/projects" element={<Projects></Projects>}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
