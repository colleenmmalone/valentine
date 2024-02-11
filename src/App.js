import ReactDOM from 'react-dom/client';
import Question from "./Question";
import './App.css';
import { useState } from 'react';
import heart from './assets/heart-bemine.svg'

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <div className='flex flex-col app'>
        <div id='view' className='flex flex-col'>
          <img src={heart} style={{ width: '250px' }} alt={'heart be mine'} />
          <input type="text" placeholder='What do I call you?' id='nameInput' value={name} onChange={e => setName(e.target.value)} />
          <button
            onClick={() => {
              console.log(name)
              const root = ReactDOM.createRoot(document.getElementById('view'));
              root.render(<Question name={name} />);

            }}
            className='btn btn-pink'
          >Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;




