import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard lastName="John" firstName="Smith" age={88} hairColor="Brown" />
      <PersonCard lastName="Joe" firstName="Shmoe" age={22} hairColor="Brown" />
      <PersonCard lastName="Bob" firstName="Ross" age={52} hairColor="Brown" />
    </div>
  );
}

export default App;
