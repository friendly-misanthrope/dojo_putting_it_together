import './App.css';
import PersonCard from './components/PersonCard'
import AlertButton from './components/AlertButton';

function App() {
  return (
    <div className="App">
      <div className="people">
        <PersonCard firstName = {"Nick"}
        lastName = {"Barker"}
        age = {32}
        hairColor = {"Blonde"} />

        <PersonCard firstName = {'Leonidas'}
        lastName = {'King'}
        age = {10}
        hairColor = {'White w/ black spots'}
        />

        <PersonCard firstName = {'Millard'}
        lastName = {'Fillmore'}
        age = {50}
        hairColor = {'Black'}
        />
      </div>

      <div className="btn">
        <AlertButton />
      </div>
      
    </div>
  );
}

export default App