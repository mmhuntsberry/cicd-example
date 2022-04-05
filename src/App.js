import logo from './logo.svg';
import './App.css';
import '@nielsen-media/gds-button/lib/src';
import '@nielsen-media/gds-menu/lib/src';
import '@nielsen-media/gds-icons/lib/src/assets/add-user-outline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <gds-button text="Click me"></gds-button>
        <gds-button text="Delete"></gds-button>
        <gds-menu text="Label"></gds-menu> */}
        <gds-icon-add-user-outline></gds-icon-add-user-outline>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ACA
        </a>
      </header>
    </div>
  );
}

export default App;
