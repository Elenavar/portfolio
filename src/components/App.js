import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './Hompage';

function App() {
  return (
    <div className="page">
      <Header />
      <Homepage></Homepage>
    </div>
  );
}

export default App;
