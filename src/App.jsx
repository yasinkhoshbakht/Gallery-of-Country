import CountryTabs from "./Components/CountryTabs/CountryTabs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>گالری کشورها</h1>
        <p>Explore tourist attractions from different countries!</p>
      </header>
      <CountryTabs />
    </div>
  );
}

export default App;
