import './scss/App.scss';
import { Clock } from './components/Clock'
import { Departures } from './components/Departures'
import { Quoto } from './components/Quoto'
import { Weather } from './components/Weather'
import { Showcase } from './components/Showcase'
import { Footer } from './components/Footer'
import img from './assets/images/logo.png'

function App() {
  return (
    <div className="App">
      <header>
        <div className='headerView'>
          <img className='hidden-logo' src={img} alt="" width='100px' height='40px'/>
        </div>
        <Showcase  />
      </header>
      <main className='componentsBlocks'>
          <Clock />
          <Departures />
          <Quoto />
          <Weather />
      </main>
        <Footer/>
    </div>
  );
}

export default App;
