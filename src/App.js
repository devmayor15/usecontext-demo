import './App.css';
import Movielist from './components/Movielist';
import Nav from './components/Nav'
import { MovieProvider } from './components/MovieContext';
import AddMovie from './components/AddMovie';

function App() {

  return (
    <div>
      <MovieProvider>
        <Nav />
        <AddMovie />
        <Movielist />
      </MovieProvider>
     
    </div>
  );
}

export default App;
