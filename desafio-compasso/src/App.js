import './App.css';
import GlobalState from './global/GlobalState';
import Router from './routes/router';


function App() {
  return (
      <div className="App">
        <GlobalState>
          <Router/>
        </GlobalState>
      </div>
  
  );
}

export default App;
