import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

const [num, incrementNum] = useState(1)
const [username, setUsername] = useState('Welcome to InfinIT Solutions')
  return (
<>
<Header/>
<main>

<h1>{num}</h1>
<h1>{incrementNum}</h1>
<button onClick = {() => incrementNum(valueNum => valueNum + 1)}>Submit</button>
<br></br>
<h1>{username}</h1>

<br/>
<input name = 'username' value = {username} onChange={(e) => setUsername(e.target.value)} />


</main>
<Footer className="myFooter"/> 
</>

  );
}

export default App;
