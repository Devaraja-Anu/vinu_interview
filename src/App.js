import './App.css';
import Bottomnav from './components/Bottomnav';
import Headtohead from './components/headtohead';
import Info from './components/Info';
import Matches from './components/Matches';
import MatchStream from './components/MatchStream';
import Navbar from './components/Navbar';
import Pathbar from './components/Pathbar';
import PlayerStats from './components/PlayerStats';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pathbar />
      <MatchStream />
      <Bottomnav />

      <div className="statsmainwrapper">
        <div className="statsmaingrid">
          <Statistics />
          <PlayerStats />
        </div>
      </div>
      <Headtohead />

      <div className='bottomgridwrapper'>
        <div className="bottomgrid">
          <Matches />
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
