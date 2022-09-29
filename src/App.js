import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercise from './components/Exercise/Exercise';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Exercise></Exercise>
    <Blog></Blog>
    </div>
  );
}

export default App;
