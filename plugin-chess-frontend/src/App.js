import "./App.css";
import history from "./history";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section className="hero">
        <h2>Welcome to the Chess Board Room</h2>

      <button onClick={() => history.push('/chess')}>Start Game</button>

      </section>
    </div>
  );
}
  

export default App;
