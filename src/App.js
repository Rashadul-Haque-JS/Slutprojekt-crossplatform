import './scss/App.scss';
import { Clock } from './components/Clock'
import { Departures } from './components/Departures'
import { Quoto } from './components/Quoto'
import { Weather } from './components/Weather'
import { Showcase } from './components/Showcase'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <div className='headerView'>
        </div>
        <Showcase  />
      </header>
      <main className='componentsBlocks'>
          <Clock />
          <Departures />
          <Quoto />
          <Weather />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
