import logo from './logo.svg';
import './App.css';
import { useSpring , animated} from 'react-spring';

function App() {
  // const fade = useSpring({
  //   from : {opacity : 0 },
  //   to : {opacity : 1 }
  // })
  const fade = useSpring({
    from : {opacity : 0 },
    opacity : 1 
  })
  console.log(fade)
  return (
    <animated.div className="App" style={fade} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>React Spring</p>
    </animated.div>
  );
}

export default App;
