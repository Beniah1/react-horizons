import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; // Changed 'navbar' to 'Navbar'
import Page from './ Page'; // Changed 'navbar' to 'Navbar'
import Page2 from './Pages2'; // Changed 'navbar' to 'Navbar'
import Pages3 from './Page3'; // Changed 'navbar' to 'Navbar'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Fixed the usage of Navbar component */}
      <Page />
      <Page2 />
      <Pages3 />
    </div>
  );
}

export default App;