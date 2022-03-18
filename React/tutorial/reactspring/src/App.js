import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import { Loop,LoopFunction,LoopObject,Clickevent } from './Loop';

function App() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  console.log(fade)
  return (
    <animated.div className="App" style={fade} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        {/* <Toggle/> */}
        <Loop />
        <LoopFunction />
        <LoopObject />
        <Clickevent />
      </main>
    </animated.div>
  );
}

export default App;
