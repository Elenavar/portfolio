import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './Hompage';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
