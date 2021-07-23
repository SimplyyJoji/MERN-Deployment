import './App.css';
import { Link, Router,Redirect} from '@reach/router'
import Pets from './views/Pets';
import NewPet from './views/NewPet';
import SinglePet from './views/SinglePet';
import EditPet from './views/EditPet';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <header>
        <nav>  
        <Link to="/pets">  Home  </Link>    
          <Link to="/pets/new">Add a Pet to the Shelter</Link>
        </nav>
      </header>

      <Router>
      <SinglePet path="/pets/:id" />
      <Pets path="/pets" />
      <EditPet path="/pets/:id/edit" />
      <NewPet path="/pets/new" />
      <Redirect from="/" to="/pets" noThrow="true" />
      <NotFound default />
      </Router>
    </div>
  );
}

export default App;

