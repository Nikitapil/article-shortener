import './App.css'
import {Hero} from './components/Hero';
import {Demo} from './components/Demo';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>

      <div className="app">
        <Hero/>
        <Demo/>
      </div>
      <ToastContainer position="top-right"/>
    </main>
  );
};

