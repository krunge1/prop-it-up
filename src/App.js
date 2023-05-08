import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jack"} lastName={"Frost"} age={18} hairColor={"Blue"}/>
      <PersonCard firstName={"Bob"} lastName={"Smith"} age={25} hairColor={"Blonde"}/>      
      <PersonCard firstName={"Ginger"} lastName={"Logitech"} age={75} hairColor={"Red"}/>
      <PersonCard firstName={"Amazon"} lastName={"Business-Movers"} age={50} hairColor={"Black"}/>
    </div>
  );
}

export default App;
